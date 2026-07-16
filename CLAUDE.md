# Portfolio — CLAUDE.md

Huy Huynh's personal portfolio. Deployed on Vercel via GitHub push to `main`.
Live URL: `portfoliohuyhuynh.vercel.app`

---

## File structure

```
index.html              Homepage
vietcharm/index.html    VietCharm case study detail page
graphics/index.html     Graphics works detail page
frenlit/index.html      FRENlit case study detail page
docs/                   Internal docs (design system, git guide, detail page template)
public/
  css/
    variables.css       Design tokens (colors, spacing, fonts, radii)
    base.css            Reset + typography
    components.css      Nav, cards, contact section, footer
    home.css            Hero, split layout, about/experience, animations
    project.css         Detail page layout (project-section, project-header)
  js/
    nav.js              Burger toggle, Contact me dropdown, email copy handler
    project.js          Detail page exit animation + bfcache reset
Images/                 All image assets
```

---

## Layout

The homepage uses a **split layout** (`.split-layout`):

- `.split-left` — sticky left panel (logo + hero + sections: works carousel, experience, tools, life)
- `.split-right` — scrollable right panel (project cards)

At ≤ 1100px, layout collapses to single-column stacked order. `.split-right` is hidden; `.left-works` (carousel) becomes visible instead.

---

## Entry animations

### Desktop (> 1100px)

- Left items animate via CSS `slide-from-left` keyframe — JS adds `anim-in` class, removes on `animationend`, adds `anim-done`.
- Right cards animate via CSS `slide-from-right` keyframe — same pattern.
- Stagger: left items 0 / 120 / 240 / 360 / 480ms, right cards 100 / 250 / 400ms.
- After `anim-done` on `.left-tools`, sets `is-visible` on `.tools-icons` (fan-out animation) after 100ms.

### Mobile fresh entry (≤ 1100px)

Hero children animate individually with inline styles (no CSS class involved):

1. Logo (`.split-logo`): slide down 8px + fade — 0ms / 500ms
2. Heading spans (`.hero-heading > span`): pure fade, 120ms stagger — 280ms / 550ms
3. Taglines (`.hero-tagline`): slide down 6px + fade — 780ms / 600ms, 880ms / 600ms
4. Contact button (`.hero-contact`): pure fade — 1080ms / 500ms
5. Below sections (works, experience, tools, life): all fade together — 1300ms / 700ms then `anim-done` + `is-visible` on tools

### Return from detail page

`sessionStorage.getItem('cameFromDetail') === '1'` is set by both the card click handler (homepage) and the exit handler in `project.js` (detail pages). Read on homepage load, cleared immediately. On **both mobile and desktop**: skip all animation — set `anim-done` on all leftItems and cards immediately, add `is-visible` on tools icons.

### bfcache (iOS Safari back navigation)

`pageshow` event with `e.persisted` resets all inline `opacity`, `transform`, `transition`, `animation`, `pointerEvents` styles on every animated element. Without this, back-navigation restores the frozen exit state.

---

## Card exit animation

### Desktop

`.split-left` exits left (`-40px`), other right-panel cards exit right (`+60px`). Navigate after 550ms.

### Mobile

1. All elements except the clicked card fade out over 0.7s.
2. `fetch(href)` prefetch starts immediately (race with 1.5s max timeout).
3. After ≥750ms AND prefetch done (or timeout), clicked card fades over 0.35s.
4. Navigate after 350ms.

This prefetch pattern prevents the white flash that occurs when the browser hasn't loaded the detail page yet.

---

## Hero contact dropdown (`.hero-dropdown`)

- Lives inside `.hero-contact` in `.hero-static`.
- Button `#heroContactBtn` toggles `.is-open` on `#heroDropdown`.
- `aria-expanded` drives the button fill animation (CSS: `[aria-expanded="true"]` → gradient shows).
- On mobile, `aria-expanded` is used instead of `:hover` to avoid iOS hover-state bug where `:hover` stays active after touch.
- Email copy: writes `huyisdesigning@gmail.com` to clipboard, shows "Copied!" 1.5s, closes dropdown.

---

## Nav system

The nav (`<nav class="nav">`) has no special hero state. It is always visible on all pages.

### Contact me dropdown (desktop only, ≤ 640px hidden)

- Button `.nav__contact-btn` toggles `.is-open` on `.nav__contact`.
- Dropdown opens **below** the button: `top: calc(100% + 8px)`.
- Items: My LinkedIn, View resume, Email (copy).
- Close on outside click or Escape.

### Mobile burger menu

- Shows `.nav__links` as a dropdown panel, aligned left.
- Includes `.nav__mobile-contact-item` items (LinkedIn, resume, email copy) — visible only ≤ 640px.

---

## Detail pages (`vietcharm/`, `graphics/`, `frenlit/`)

- `<nav class="nav">` — no modifier class.
- "Back to home" (`.project-back`, `href="/#works"`) and nav logo (`a.nav__logo`, `href="/"`) both trigger exit animation via `project.js`.
- Lazy images wrapped in `div.img-wrap` by JS → skeleton shimmer → `loaded` class reveals image.
- `@keyframes page-enter` in `project.css` fades body in on load (prevents white flash on navigation).
- `@keyframes exit-down` / `exit-right` in `project.css` — used by `project.js` for exit animation.
- Footer (`<footer class="site-footer">`) visible on all detail pages (desktop + mobile).

### Exit animation (`public/js/project.js`)

Intercepts clicks on `.project-back` and `.nav__logo`. Cmd/Ctrl/Shift+click passes through (opens new tab). `prefers-reduced-motion` users navigate instantly with no animation.

- Desktop: `@keyframes exit-down` — `translateY(20px)` + `opacity: 0` over 350ms
- Mobile: `@keyframes exit-right` — `translateX(40px)` + `opacity: 0` over 350ms
- Sets `cameFromDetail` in sessionStorage before navigating so homepage skips entry animation.
- bfcache: `pageshow` with `e.persisted` resets `body.style.animation` and `pointerEvents`.
- Uses keyframe animation (not CSS transition) because `page-enter` fill-mode holds `opacity:1` and overrides inline opacity; keyframes have explicit `from { opacity:1 }` so they fire reliably in the same JS frame.

### VietCharm (`vietcharm/index.html`)

Section order: Overview → Objective → Challenge → Problem analysis → Design solution → What's next → Behance

Design solution sub-sections: Wireframe → Design References → Homepage (`VC_Solution_01.png`, `VC_Solution_02.gif`) → Booking (`VC_Solution_03.png`)

### Graphics (`graphics/index.html`)

10 brand sections, each: `section__label` + description + full-width image. Images in `Images/Proj_Graphics/`. Full-bleed override: `.project-section__full-img { border-radius: 0 }`.

### FRENlit (`frenlit/index.html`)

AI-powered group planning app case study.

---

## Key non-obvious facts

1. **`cameFromDetail` flag:** Set by the card click handler on homepage AND by `project.js` on detail pages. Read on homepage load, cleared immediately. Skips entry animation on **both desktop and mobile** — adds `anim-done` to leftItems and cards, adds `is-visible` to tools icons.

2. **bfcache vs sessionStorage:** On iOS Safari back navigation, `pageshow` with `e.persisted` fires. `sessionStorage` still holds the flag at this point, so the `cameFromDetail` branch runs again. This is intentional — it also resets inline styles.

3. **`aria-expanded` for iOS hover fix:** The hero contact button uses `[aria-expanded="true"]` in CSS (not `:hover`) to activate the filled gradient state. `:hover` on iOS sticks after a tap and cannot be released with `blur()`.

4. **CSS specificity for icon-check:** `.nav__dropdown-item svg { display: block }` (0,1,1) beats `.icon-check { display: none }` (0,1,0). Fix: `.nav__dropdown-item .icon-check { display: none }` (0,2,0).

5. **Tools fan-out missing on return:** The `cameFromDetail` branch must manually add `is-visible` to `.tools-icons` — `anim-done` class alone does not trigger it (CSS needs `.tools-icons.is-visible`).

6. **Mobile animation is inline-style only:** Hero children (logo, heading spans, taglines, contact) are animated with `el.style.*` directly. `anim-in`/`anim-done` CSS classes are NOT used for them. Only `belowSections` receive `anim-done`.

7. **Footer visibility:** `.page--home .site-footer { display: none }` on desktop (footer only shows on mobile homepage). Detail pages show footer on both sizes (no `.page--home` class on their body).

8. **`nav--hero` CSS is dead:** `components.css` still has `.nav.nav--hero` rules, but the class is no longer applied anywhere in HTML. Safe to remove if cleaning up.

---

## Deployment

Push to `main` → Vercel auto-deploys. No build step, static site.

```
git add <files>
git commit -m "..."
git push origin main
```
