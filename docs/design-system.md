# Design System

Nguồn thực tế: `public/css/variables.css`, `public/css/base.css`, `public/css/components.css`

---

## Màu sắc

### Nền

| Token | Giá trị | Dùng ở đâu |
|---|---|---|
| `--color-bg` | `#ffffff` | Card background, input, skeleton loaded state |
| `--color-bg-page` | `#f4f6f9` | Body background toàn trang |
| `--color-surface` | `#e6e6e6` | Hero CTA button, nav Contact me button |
| `--color-surface-2` | `#f1f5f9` | Skeleton shimmer gradient |
| `--color-border` | `#e2e8f0` | Card borders, input borders, skeleton shimmer |

### Chữ

| Token | Giá trị | Dùng ở đâu |
|---|---|---|
| `--color-text-heading` | `#121212` | Tất cả heading, body text, labels |
| `--color-text-body` | `#121212` | Body paragraph text |
| `--color-text-muted` | `#121212` | Meta text, tagline, muted labels |
| `--color-text-inverse` | `#ffffff` | Chữ trên nền tối (gradient button) |

> Tất cả text token đều là `#121212`. Phân biệt bằng font weight và font size, không bằng màu.

### Accent

| Token | Giá trị | Dùng ở đâu |
|---|---|---|
| `--color-accent-1` | `#1e3a8a` | Pill text, btn--outline, gradient button start |
| `--color-accent-2` | `#3b82f6` | Section labels, card border on `.--goal`, `.text-blue`, link-arrow, gradient button end |

### Pill

| Token | Giá trị | Dùng ở đâu |
|---|---|---|
| `--color-pill-bg` | `#eff6ff` | Skill pills, Coming Soon badge |
| `--color-pill-text` | `#1e3a8a` | Chữ trong pill |

### Gradients

| Token | Dùng ở đâu |
|---|---|
| `--gradient-hero` | Background hero section (radial, blue tints) |
| `--gradient-text` | `.text-gradient` class |
| `--gradient-btn` | Primary button fill, hero CTA hover/active state |

---

## Typography

### Font families

| Token | Font | Dùng ở đâu |
|---|---|---|
| `--font-heading` | Space Grotesk | Tất cả heading, section label, nav logo, card title |
| `--font-body` | Archivo | Body text, buttons, pills, meta |

### Type scale

| Token | px | Dùng ở đâu |
|---|---|---|
| `--text-xs` | 14px | Pill, coming-soon badge, btn--sm, meta labels |
| `--text-sm` | 14px | Body text, card desc, exp card, nav items |
| `--text-base` | 14px | Default body |
| `--text-lg` | 18px | Nav logo |
| `--text-xl` | 20px | — |
| `--text-2xl` | 24px | Project section h2, FRENlit subheading mobile |
| `--text-3xl` | 30px | Section title mobile, project title mobile |
| `--text-4xl` | 36px | Section title desktop, project title desktop |
| `--text-5xl` | 48px | — |
| `--text-6xl` | 60px | — |
| `--text-7xl` | 72px | — |

> `--text-xs`, `--text-sm`, `--text-base` đều là 14px — phân biệt bằng tên ngữ nghĩa, không khác nhau về kích thước.

### Font weights

| Token | Giá trị | Dùng ở đâu |
|---|---|---|
| `--fw-normal` | 400 | Hero heading, tagline, hero CTA, nav contact btn, body text |
| `--fw-medium` | 500 | Project back link, meta labels |
| `--fw-semibold` | 600 | Buttons, pills, link-arrow, nav links |
| `--fw-bold` | 700 | h1–h6 mặc định, section label, card title, exp role |
| `--fw-extrabold` | 800 | Section title, project title |

### Line height

| Token | Giá trị | Dùng ở đâu |
|---|---|---|
| `--leading-tight` | 1.1 | Heading, hero heading |
| `--leading-snug` | 1.3 | Project section h2, meta value |
| `--leading-normal` | 1.6 | Body default |
| `--leading-relaxed` | 1.75 | Body paragraph, tagline, about text |

### Letter spacing

| Token | Giá trị | Dùng ở đâu |
|---|---|---|
| `--tracking-tight` | -0.03em | Headings, hero heading, section labels, project title |
| `--tracking-normal` | 0 | Default |
| `--tracking-wide` | 0.04em | — |
| `--tracking-wider` | 0.08em | — |
| `--tracking-widest` | 0.12em | — |

---

## Spacing (8px grid)

| Token | px | Tên gọi |
|---|---|---|
| `--space-1` | 8px | gap-xs |
| `--space-2` | 16px | gap-sm |
| `--space-3` | 24px | gap-md, container gutter |
| `--space-4` | 32px | gap-lg, standard section padding |
| `--space-5` | 40px | gap-xl ish, layout bottom padding |
| `--space-6` | 48px | gap-xl, split-left padding-top |
| `--space-7` | 56px | section gap mobile |
| `--space-8` | 64px | gap-2xl, split-left section gap |
| `--space-10` | 80px | section spacing desktop |
| `--space-12` | 96px | about-experience gap mobile |
| `--space-16` | 128px | section-lg |
| `--space-20` | 160px | — |

### Semantic aliases

| Alias | Maps to |
|---|---|
| `--gap-xs` | `--space-1` (8px) |
| `--gap-sm` | `--space-2` (16px) |
| `--gap-md` | `--space-3` (24px) |
| `--gap-lg` | `--space-4` (32px) |
| `--gap-xl` | `--space-6` (48px) |
| `--gap-2xl` | `--space-8` (64px) |
| `--section-sm` | `--space-8` (64px) |
| `--section-md` | `--space-12` (96px) |
| `--section-lg` | `--space-16` (128px) |

---

## Border radius

| Token | px | Dùng ở đâu |
|---|---|---|
| `--radius-sm` | 4px | — |
| `--radius-md` | 8px | Tool icons, life gallery images, input |
| `--radius-lg` | 16px | Cards, project section images, exp cards, img-wrap |
| `--radius-xl` | 24px | — |
| `--radius-full` | 9999px | Buttons, pills, hero CTA |

---

## Shadows

| Token | Dùng ở đâu |
|---|---|
| `--shadow-xs` | — |
| `--shadow-sm` | — |
| `--shadow-card` | Project info cards, exp card hover, dropdown |
| `--shadow-card-hover` | Project info cards hover |

---

## Buttons

Tất cả button dùng class `.btn` làm base.

| Variant | Class | Background | Dùng ở đâu |
|---|---|---|---|
| Primary | `.btn` | `--gradient-btn` (blue gradient) | CTA chính |
| Small | `.btn.btn--sm` | inherit | Nav contact, hero contact |
| Large | `.btn.btn--lg` | inherit | — |
| Ghost | `.btn.btn--ghost` | transparent + border | — |
| Soft | `.btn.btn--soft` | blue tint | — |
| Outline | `.btn.btn--outline` | transparent + accent border | Behance link |

**Hero CTA / Nav Contact button** — không dùng `.btn` variant thông thường. Background là `--color-surface` (#e6e6e6), hover fill là `--gradient-btn` qua `::before` pseudo-element.

- Desktop: wipe effect (`translateX(-101%)` → `translateX(0)`) trong `@media (hover: hover)`
- Mobile: `aria-expanded="true"` → `opacity: 1` on `::before` (không có wipe)

---

## Layout

| Token | Giá trị |
|---|---|
| `--container-max` | 1120px |
| `--container-padding` | `--space-3` (24px), mobile: `--space-2` (16px) |

Grid: 12 cột trên desktop (`repeat(12, 1fr)`, gap 24px), 4 cột trên mobile.

---

## Transitions

| Token | Giá trị | Dùng ở đâu |
|---|---|---|
| `--transition-fast` | 150ms ease | — |
| `--transition` | 200ms ease | Button, link hover states |
| `--transition-slow` | 350ms ease | — |

---

## Responsive breakpoints

| Breakpoint | Tác dụng |
|---|---|
| ≤ 1100px | Split layout → stacked; `.split-right` ẩn; carousel hiện |
| ≤ 900px | About + Experience column → single column |
| ≤ 768px | Container padding 16px; project title nhỏ hơn; exp card font nhỏ hơn |
| ≤ 640px | Mobile hero font nhỏ hơn; nav burger menu; footer homepage hiện |
