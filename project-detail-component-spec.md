# Project Detail — Component Spec

Mô tả từng component theo thứ tự xuất hiện trong `project-demo/index.html`. Đây là nguồn chân lý để build bất kỳ trang project detail nào.

---

## 1. `nav`
**Class:** `.nav` `.nav__inner` `.nav__logo` `.nav__links` `.nav__burger`

Sticky top, frosted glass background. Chiều cao cố định 64px.
- Logo: text "hdhuy", link về `/`
- Links: Works / About / Resume
- CTA: `.btn .btn--sm` "Let's solve a problem" → `/#contact`
- Mobile (≤640px): links ẩn, hiện burger menu `.nav__burger`

---

## 2. `project-back`
**Class:** `.project-back`

Một dòng link quay lại, nằm ngay dưới nav.
- Dùng `.link-arrow .link-arrow--back`
- Text: "← Back to home"
- Padding block: 16px

---

## 3. `project-hero`
**Class:** `.project-hero` `.project-hero__inner` `.project-hero__title`

Block text đầu trang, max-width 760px.
- **Tag pill** (`.proj-tag`) — category / năm, đặt trên title
- **Title** (`.project-hero__title`) — heading editorial lớn, `clamp(2rem, 4vw, 3rem)`, extrabold, line-height tight

Không có ảnh ở đây — ảnh/cover nằm ở component riêng bên dưới.

---

## 4. `proj-cover`
**Class:** `.proj-cover` `.proj-cover__wordmark`

Full-bleed block nằm ngay dưới hero text, trước summary.
- Background: màu custom per-project, set bằng `style="--cover-color: #hex"`
- Nội dung: wordmark lớn (tên project viết hoa), căn giữa, màu trắng
- Font: Space Grotesk, `clamp(3rem, 10vw, 4.5rem)`, extrabold
- Padding block: 96px
- **Dùng khi:** project có visual identity rõ (tên thương hiệu, app name). Thay thế bằng `project-hero__cover` (ảnh) nếu có screenshot thật.

---

## 5. `proj-summary`
**Class:** `.proj-summary` `.proj-summary__text`

Một câu duy nhất nằm ngay dưới cover, trước meta.
- Font size: `--text-xl` (20px), medium weight
- Color: `--color-text-body`
- Line-height: relaxed (1.75)
- Có border-bottom chia tách với meta
- **Nội dung:** tóm tắt outcome hoặc challenge cốt lõi trong 1 câu

---

## 6. `proj-meta`
**Class:** `.project-meta` `.proj-meta-inner` `.proj-meta__field` `.proj-meta__label` `.proj-meta__value` `.proj-responsibilities` `.proj-responsibility`

Grid 2 cột, stack 1 cột ở ≤768px.

**Cột trái:**
- **Role** — label xs muted + value sm bold
- **Responsibilities** — label + sub-grid 2 cột, mỗi item có dấu `—` ở trước

**Cột phải:**
- **Company** — label + value
- **Product** — label + value
- **Timeline** — label + value

Gap giữa 2 cột: 64px. Padding block: 64px.

---

## 7. `project-section` + `proj-tag` + `proj-heading` + `proj-body` + `project-image`
**Dùng cho:** Context, Research, Reflection, và bất kỳ section nào cần text + ảnh

**Wrapper:** `.project-section` — padding block 80px, border-bottom. Thêm `.project-section--accent` để nền xám nhạt.

**Bên trong** (`.project-section__inner`, max-width 760px, flex column):

| Class | Mô tả |
|---|---|
| `.proj-tag` | Label pill đầu section. Variant: `--dark` (nền đen), `--accent` (nền xanh nhạt) |
| `.proj-heading` | H2, Space Grotesk, 30px, bold, tracking tight |
| `.proj-body` | Paragraph 16px, color body, line-height 1.75. Nhiều paragraph dùng nhiều `.proj-body`, tự có gap 24px |
| `.project-image` | Ảnh full-width, border radius md, border 1px. Caption tùy chọn bằng `.project-image__caption` (xs, italic, muted, căn giữa) |

---

## 8. `proj-problem-statement`
**Class:** `.proj-problem-statement`

Thay thế `.proj-heading` trong section **The Problem**.
- Font: Space Grotesk, 24px, extrabold, tracking tight
- Color: `--color-text-heading`
- Dùng kèm `.proj-tag.proj-tag--dark` ("The Problem") đặt trên

---

## 9. `proj-pullquote`
**Class:** `.proj-pullquote`

Block quote highlight, xuất hiện 3 lần: Problem / Research / Reflection.
- Background: `--color-surface`
- Border trái: 3px solid `--color-accent-2` (xanh)
- Font: 18px, italic, medium, line-height 1.75
- Padding: 40px 48px
- Margin top: 48px
- **Nội dung:** một câu duy nhất, insight sắc nhất của section đó

---

## 10. `proj-decisions-list` + `proj-decision-card`
**Class:** `.proj-decisions-list` `.proj-decision-card` `.proj-decision-card__text` `.proj-decision-card__num` `.proj-decision-card__heading` `.proj-decision-card__body` `.proj-decision-card__image`

Danh sách các decision, mỗi card layout **2 cột: text trái — ảnh phải**. Stack 1 cột ở ≤768px.

**Số thứ tự:** tự động đếm bằng CSS counter (`01`, `02`, `03`...), font 4xl, color muted
**Card container:** border 1px, radius lg, background surface, padding 32px
**Gap giữa các card:** 16px

Mỗi card gồm:
- `.proj-decision-card__num` — số auto, 36px, muted gray
- `.proj-decision-card__heading` — H3, 20px, bold
- `.proj-decision-card__body` — paragraph 16px, body color
- `.proj-decision-card__image` — ảnh với border radius md, border 1px

---

## 11. `proj-shipped`
**Class:** `.proj-shipped__intro` `.proj-shipped__list` `.proj-shipped__item`

Tóm tắt những gì đã ship, dạng bullet list có arrow.
- **Intro line** (`.proj-shipped__intro`): 18px, medium, heading color — thường là "The feature shipped as X surfaces:"
- **List item** (`.proj-shipped__item`): mỗi item có `→` màu xanh ở trước, format `**Label bold** — mô tả ngắn`

---

## 12. `proj-screens`
**Class:** `.proj-screens` `.proj-screens__item` `.proj-screens__caption`

Grid ảnh UI cuối, **2 cột cố định** desktop / 1 cột mobile (≤768px).
- Mỗi item: ảnh (border radius md, border 1px) + caption italic bên dưới
- Caption: 14px, italic, muted, căn giữa
- Gap: 16px
- **Nội dung:** screenshots thật của sản phẩm sau khi ship

---

## 13. `proj-reflection-body` + `proj-limitation`
**Class:** `.proj-reflection-body` `.proj-limitation`

Dùng trong section Reflection (có `.proj-tag.proj-tag--accent`), sau pull-quote.

**`.proj-reflection-body`** — wrapper flex column, gap 32px, chứa nhiều `.proj-body` paragraph

**`.proj-limitation`** — note cuối section, nền surface-2 (xám nhạt), border 1px, radius md
- Font: 14px, italic, muted color
- **Nội dung:** ghi chú về giới hạn của project (không có data thật, không test với user thật, v.v.)

---

## 14. `project-closing`
**Class:** `.project-closing` `.project-closing__inner` `.project-closing__text` `.project-closing__thanks` `.project-closing__email` `.project-closing__actions` `.project-closing__nav`

Section cuối, nền `--color-surface`, padding block 80px, border-top.

Cấu trúc 3 hàng (gap 48px):
1. **Text:** "Thanks for your time" (H2 style) + email link gạch chân màu xanh
2. **CTA:** `.btn` "See full case study on Behance →"
3. **Nav:** `.link-arrow--back` "← All projects" + `.link-arrow` "Next project →"

---

## Tóm tắt thứ tự mặc định

```
nav
project-back
project-hero          ← tag + title
proj-cover            ← full-bleed wordmark
proj-summary          ← 1 câu
proj-meta             ← 2-col grid
project-section       ← Context (tag + heading + body + image)
project-section--accent ← The Problem (tag--dark + problem-statement + body + pullquote)
project-section       ← Research (tag + heading + body + image + pullquote)
project-section--accent ← Design Decisions (tag + heading + decisions-list)
project-section       ← Shipped Summary (shipped intro + list)
project-section--accent ← Screen Showcase (screens grid)
project-section       ← Reflection (tag--accent + heading + body + image + pullquote + reflection-body + limitation)
project-closing
```

Thứ tự và tập hợp component có thể thay đổi tuỳ project — đây là thứ tự mặc định đã dùng trong `project-demo`.
