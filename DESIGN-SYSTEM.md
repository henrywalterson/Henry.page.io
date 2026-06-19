# Design System — hdhuy Portfolio

Static HTML/CSS. No framework. All tokens live in `public/css/variables.css`.

---

## Typography

| Token | Value | Usage |
|---|---|---|
| `--font-heading` | Space Grotesk | H1–H6, logo, card titles, nav logo |
| `--font-body` | Archivo | Body, buttons, labels, captions |

### Type Scale (major third — 1.25×)

| Token | rem | px |
|---|---|---|
| `--text-xs` | 0.75rem | 12px |
| `--text-sm` | 0.875rem | 14px |
| `--text-base` | 1rem | 16px |
| `--text-lg` | 1.125rem | 18px |
| `--text-xl` | 1.25rem | 20px |
| `--text-2xl` | 1.5rem | 24px |
| `--text-3xl` | 1.875rem | 30px |
| `--text-4xl` | 2.25rem | 36px |
| `--text-5xl` | 3rem | 48px |
| `--text-6xl` | 3.75rem | 60px |
| `--text-7xl` | 4.5rem | 72px |

### Font Weight

| Token | Value |
|---|---|
| `--fw-normal` | 400 |
| `--fw-medium` | 500 |
| `--fw-semibold` | 600 |
| `--fw-bold` | 700 |
| `--fw-extrabold` | 800 |

### Line Height

| Token | Value | Usage |
|---|---|---|
| `--leading-tight` | 1.1 | Hero headlines, large headings |
| `--leading-snug` | 1.3 | Card titles, sub-headings |
| `--leading-normal` | 1.6 | Body text |
| `--leading-relaxed` | 1.75 | Pull-quotes, longer reads |

### Letter Spacing

| Token | Value | Usage |
|---|---|---|
| `--tracking-tight` | -0.03em | Headings |
| `--tracking-normal` | 0 | Default |
| `--tracking-wide` | 0.04em | — |
| `--tracking-wider` | 0.08em | — |
| `--tracking-widest` | 0.12em | Section labels (uppercase caps) |

---

## Color

### Base

| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#ffffff` | Page background |
| `--color-surface` | `#f8fafc` | Alternate section background |
| `--color-surface-2` | `#f1f5f9` | Tags, limitation notes |
| `--color-border` | `#e2e8f0` | Card borders, dividers |
| `--color-border-subtle` | `#f1f5f9` | Very light dividers |

### Text

| Token | Hex | Usage |
|---|---|---|
| `--color-text-heading` | `#0f172a` | H1–H6 |
| `--color-text-body` | `#334155` | Paragraphs |
| `--color-text-muted` | `#64748b` | Captions, labels, nav links |
| `--color-text-inverse` | `#ffffff` | Text on dark/gradient backgrounds |

### Accent (blue palette)

| Token | Hex | Usage |
|---|---|---|
| `--color-accent-1` | `#1e3a8a` | Deep navy — outline buttons, hero gradient start |
| `--color-accent-2` | `#3b82f6` | Primary blue — links, pull-quote border, gradient end |
| `--color-accent-3` | `#93c5fd` | Light blue — accent tag borders |

### Pills

| Token | Hex | Usage |
|---|---|---|
| `--color-pill-bg` | `#eff6ff` | Default pill background |
| `--color-pill-text` | `#1e3a8a` | Default pill text |

### Gradients

| Token | Definition |
|---|---|
| `--gradient-hero` | 4-layer mesh radial-gradient + white base — used on homepage hero |
| `--gradient-text` | `linear-gradient(90deg, #1e3a8a, #3b82f6)` — headline accent |
| `--gradient-btn` | `linear-gradient(135deg, #1e3a8a, #3b82f6)` — primary button fill |

---

## Spacing — 8px Grid

Base unit: **8px**. All tokens = `N × 8px`.

| Token | px | Semantic alias |
|---|---|---|
| `--space-1` | 8px | `--gap-xs` — inline gaps, icon spacing |
| `--space-2` | 16px | `--gap-sm` — tight component gaps |
| `--space-3` | 24px | `--gap-md` — standard gaps |
| `--space-4` | 32px | `--gap-lg` — card/section internal |
| `--space-5` | 40px | — |
| `--space-6` | 48px | `--gap-xl` — between major blocks |
| `--space-7` | 56px | — |
| `--space-8` | 64px | `--gap-2xl` — section dividers |
| `--space-10` | 80px | — |
| `--space-12` | 96px | — |
| `--space-14` | 112px | — |
| `--space-16` | 128px | — |
| `--space-20` | 160px | — |
| `--space-24` | 192px | — |
| `--space-32` | 256px | — |

### Section Padding Aliases

| Token | Value | Usage |
|---|---|---|
| `--section-sm` | 64px | Tight sections |
| `--section-md` | 96px | Standard sections |
| `--section-lg` | 128px | Hero / feature sections |

The `.section` utility class applies `padding-block: var(--space-8)` (64px desktop, 48px mobile).

---

## Layout

- **Max container width:** 1120px (`--container-max`)
- **Gutter:** 24px (`--container-padding`)
- **Container class:** `.container` — centers content, applies max-width + gutter
- **Grid:** CSS Grid, no library. 2-column is the default for hero, meta, card grids.
- **Breakpoints:** `max-width: 768px` (tablet), `max-width: 640px` (mobile)

---

## Border Radius

| Token | Value |
|---|---|
| `--radius-sm` | 4px |
| `--radius-md` | 8px |
| `--radius-lg` | 16px |
| `--radius-xl` | 24px |
| `--radius-full` | 9999px — pills, buttons |

---

## Shadows

| Token | Usage |
|---|---|
| `--shadow-xs` | Subtle lift |
| `--shadow-sm` | Small components |
| `--shadow-card` | Card default |
| `--shadow-card-hover` | Card on hover |

---

## Transitions

| Token | Value |
|---|---|
| `--transition-fast` | 150ms ease |
| `--transition` | 200ms ease |
| `--transition-slow` | 350ms ease |

---

## Components

### Buttons (`.btn`)

```
.btn          — primary, gradient fill, full-radius pill
.btn--sm      — smaller padding, xs font size
.btn--ghost   — transparent, border only
.btn--outline — transparent, accent-1 border + text
```

### Pills (`.pill`)

```
.pill          — blue tint bg (#eff6ff), navy text
.pill--dark    — white/translucent (for dark backgrounds)
.pill--outline — transparent, accent-1 border
```

### Section Tag Labels (`.proj-tag`) — project pages only

```
.proj-tag          — default: surface-2 bg, muted text, subtle border
.proj-tag--dark    — black bg, white text (used for "The Problem")
.proj-tag--accent  — blue tint bg, accent color (used for "Reflection")
```

### Cards (`.card`)

- Border: 1px `--color-border`, `--radius-lg`
- Image: `aspect-ratio: 16/9`
- Hover: `translateY(-4px)` + `--shadow-card-hover`
- Locked state: `.card--locked` — opacity 0.55, grayscale(0.3), pointer-events none

### Pull-quote (`.proj-pullquote`) — project pages only

- Light surface background, 3px left border in `--color-accent-2`
- Italic, `--text-lg`, `--leading-relaxed`

### Navigation (`.nav`)

- Sticky top, height 64px (8 × 8px)
- Frosted glass: `rgba(255,255,255,0.92)` + `backdrop-filter: blur(12px)`
- Mobile: burger menu at ≤640px, full-width dropdown

### Text utilities

```
.text-gradient  — gradient clip on text (navy → blue)
.text-blue      — color: --color-accent-2
.link-arrow     — inline arrow link with hover gap animation
.link-arrow--back — muted color variant
```

---

## File Structure

```
public/css/
  variables.css   ← all tokens (source of truth)
  base.css        ← reset, body, headings, .container, .section, .btn, .pill, utilities
  components.css  ← .nav, .card, .footer (shared across pages)
  home.css        ← homepage-only (.hero, .contact, .card--locked)
  project.css     ← project detail page (.project-hero, .proj-*, etc.)
  vietcharm.css   ← legacy VietCharm-specific styles (not currently imported)
```
