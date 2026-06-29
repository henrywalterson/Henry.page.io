# Portfolio — CLAUDE.md

Huy Huynh's personal portfolio. Deployed on Vercel via GitHub push to `main`.
Live URL: `portfoliohuyhuynh.vercel.app`

---

## File structure

```
index.html              Homepage
vietcharm/index.html    VietCharm case study detail page
graphics/index.html     Graphics works detail page
public/
  css/
    variables.css       Design tokens (colors, spacing, fonts, radii)
    base.css            Reset + typography
    components.css      Nav, cards, contact section, footer
    home.css            Hero animation, about/experience, life gallery
    project.css         Detail page layout (project-section, project-header)
  js/
    nav.js              Burger toggle, Contact me dropdown, email copy handler
Images/                 All image assets
```

---

## Hero animation system

The hero is the most complex part of the page. It works differently on desktop vs mobile.

### Desktop (`> 768px`)

- The `.hero-reveal` section is `400vh` tall with a sticky inner container.
- As the user scrolls through it, a `requestAnimationFrame` loop reads `hero.getBoundingClientRect().top` and drives a paused GSAP timeline via `.progress()`.
- The timeline animates character colors: white → blue (#3677E4) → blue/muted pattern.
- Uses `getBoundingClientRect()` (not `scrollY`) for iOS momentum scroll compatibility.
- When progress ≥ 0.99, removes `nav--hero` class and smooth-scrolls to `#works`.

### Mobile (`≤ 768px`)

- The `.hero-reveal` section is `100svh` (fits viewport exactly, no scroll).
- Page is scroll-locked via `document.body.style.position = 'fixed'` + `overflow: hidden` + `width: 100%`.
- User swipes down to drive the animation (touch delta accumulates, drives GSAP progress).
- Swipe threshold: 220px net downward movement to complete.
- On complete: unlock body, remove `nav--hero`, burger slides in, auto-scroll to `#works`.

### `prefers-reduced-motion` handling

There are 4 completely separate code paths. Each path calls `splitChars()` independently — **do not share allChars between paths**, it caused cross-contamination bugs.

| | reduce motion OFF | reduce motion ON |
|---|---|---|
| **Desktop** | rAF scroll-driven animation | Reveal nav on first scroll, no GSAP |
| **Mobile** | Swipe-driven animation | Auto-play ~2s animation |

**Mobile + reduce motion ON** sequence:
1. `splitChars()` called inside this branch only.
2. Hint pill hidden immediately (`is-hidden`).
3. `gsap.set(rmChars, { color: '#ffffff' })` — CSS reduce-motion rule sets `.tg { color: #3677E4 }` immediately, so chars inherit blue. Must reset to white before animating.
4. Build timeline with `paused: true`, add tweens, `rmTl.timeScale(rmTl.duration() / 2)` to stretch to 2s, then `rmTl.play()`.
5. `onComplete`: unlock body, remove `nav--hero`, 900ms easeInOut rAF scroll to `#works` using `works.offsetTop - navHeight`.

**Critical:** always set `timeScale` BEFORE `.play()`. Creating a timeline without `paused: true` and then setting `timeScale` causes a race condition where `onComplete` never fires.

### Scroll hint pill (`.hero-scroll-hint`)

- Fixed position, bottom: 52px desktop / 28px mobile.
- Starts with bounce animation ("scroll to continue" label).
- On first swipe gesture: `.is-keep` class swaps labels to "keep scrolling" + starts filling left-to-right via `clip-path: inset(0 calc(100% - var(--fill, 0%)) 0 0)`.
- `--fill` CSS variable is set inline by JS as scroll progresses.
- On complete: `.is-hidden` fades it out.
- On reduce motion ON: hidden immediately, never shown.

---

## Nav system

### Hero state

Nav starts with `nav--hero` class on `.nav`. CSS rules:

```css
.nav.nav--hero .nav__links,
.nav.nav--hero .nav__contact { opacity: 0; transform: translateY(-5px); pointer-events: none; }
```

On mobile: burger is also hidden in hero state:
```css
@media (max-width: 640px) {
  .nav.nav--hero .nav__burger { opacity: 0; transform: translateX(8px); pointer-events: none; }
  .nav.nav--hero .nav__links { opacity: 1; transform: none; pointer-events: auto; }
}
```

`nav--hero` is removed by JS when animation completes OR when user clicks a nav link.

### Contact me dropdown

- Desktop only (`.nav__inner > .nav__contact { display: none }` on mobile ≤ 640px).
- Button `.nav__contact-btn` toggles `.is-open` on `.nav__contact` wrapper.
- Dropdown has two items: My LinkedIn (arrow icon, opens new tab) + Email (copy icon).
- On email copy: shows "Copied!" for 1.5s, then closes dropdown.
- Close on outside click or Escape.

### Mobile burger menu

- Shows `.nav__links` as a dropdown panel.
- Includes two extra `li.nav__mobile-contact-item` items (My LinkedIn + Email copy) appended to the links list — visible only on mobile ≤ 640px.

---

## Detail pages (`vietcharm/`, `graphics/`)

- Use `<nav class="nav">` (no `nav--hero` class — nav always visible).
- "Back to home" links use `href="/#works"` — this triggers the homepage hash detection which immediately removes `nav--hero` and jumps to My Works.
- Same nav HTML structure as homepage (dropdown, burger, mobile contact items).
- Lazy images use a `div.img-wrap` wrapper + `loaded` class for skeleton → reveal transition.
- Post-load contact scroll: a `setInterval` correction loop (4 × 300ms) re-checks scroll target after lazy images load and can shift layout.

---

## Key non-obvious facts

1. **Hash detection on homepage load:** `window.location.hash.length > 0` at page load skips the entire hero animation and immediately removes `nav--hero`. Used when navigating from detail pages via `/#works`.

2. **`leaveTriggered` variable:** declared in desktop branch but assigned globally (no `var`) in the nav click handler. Safe because mobile branch always `return`s before reaching desktop code.

3. **CSS specificity for icon-check:** `.nav__dropdown-item svg { display: block }` (0,1,1) overrides `.icon-check { display: none }` (0,1,0). The fix is `.nav__dropdown-item .icon-check { display: none }` (0,2,0).

4. **Scroll target after position:fixed:** After releasing `document.body.style.position = 'fixed'`, `window.scrollY` resets to 0. Use `works.offsetTop - navHeight` (not `getBoundingClientRect().top + scrollY`) to compute the correct scroll target.

5. **GSAP ticker pauses on hidden tabs:** `document.hidden = true` → rAF stops → GSAP doesn't tick. Cannot test GSAP animations in preview environments where the tab is hidden.

6. **ScrollTrigger is registered but not used:** `gsap.registerPlugin(ScrollTrigger)` is called for future compatibility. The hero animation uses raw rAF + `getBoundingClientRect`, not ScrollTrigger — this was intentional for iOS momentum scroll support.

7. **Char splitting is per-branch:** Each of the 4 paths (mobile/desktop × reduce-motion on/off) calls `splitChars()` independently. Do NOT hoist char splitting to the top of the IIFE — sharing `allChars` between the mobile auto-play and swipe paths caused GSAP to interfere across paths even when `reducedMotion` was false.

8. **CSS reduce-motion overrides chars to blue:** `@media (prefers-reduced-motion: reduce) { .tg { color: #3677E4 } }` makes `.tg` blue immediately on page load. Since `.tg-ch` spans inherit from `.tg`, they also start blue. The auto-play path must call `gsap.set(rmChars, { color: '#ffffff' })` to reset before animating, otherwise the first tween (white→blue) is invisible.

---

## Deployment

Push to `main` → Vercel auto-deploys. No build step, static site.

```
git add <files>
git commit -m "..."
git push origin main
```
