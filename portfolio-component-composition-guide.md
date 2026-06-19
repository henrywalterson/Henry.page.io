# Component Composition Guide — hdhuy Portfolio

Đây là tài liệu bổ sung cho `DESIGN-SYSTEM.md` (file đó là nguồn chân lý cho token + class cơ bản: `.btn`, `.pill`, `.proj-tag`, `.card`, `.proj-pullquote`, `.nav`). File này mô tả **cách compose các component lớn hơn** chưa được định nghĩa rõ trong `project.css`/`home.css`.

## Cách dùng
Mỗi lần tạo/sửa trang, đưa Claude Code **cả 2 file**: `DESIGN-SYSTEM.md` (token + class nền tảng) + file này (cấu trúc compose). Sau đó mô tả ngắn gọn trang cần gì.

---

## Quy ước
- Mọi class riêng cho trang project dùng prefix `proj-` (đã thiết lập qua `.proj-tag`, `.proj-pullquote`)
- Mọi class riêng cho homepage sống trong `home.css` (đã có `.hero`, `.contact`, `.card--locked`)
- Không tạo token mới ngoài những gì đã có trong `variables.css` — nếu cần giá trị mới, thêm vào `variables.css` trước, không hardcode

---

## Components cần bổ sung (chưa có trong DESIGN-SYSTEM.md)

### `.proj-cover` — Cover Visual
Full-bleed color block giữa hero và meta grid, chứa wordmark project size lớn.
- Background: màu riêng từng project (custom property `--cover-color`, set inline hoặc qua data attribute)
- Text: `--font-heading`, `--text-7xl`, `--fw-extrabold`, `--color-text-inverse`, centered
- Padding block: `--space-12` (96px) hoặc `--space-16` nếu cần thoáng hơn

### `.proj-meta` — Meta Grid
2-cột (CSS Grid, stack 1 cột ở `≤768px`), nằm giữa 2 đường `--color-border` (divider trên/dưới).
- Cột trái: Role (label `.text-xs` muted + value) → Responsibilities (label + 2 sub-cột bullet list)
- Cột phải: Company, Product, Timeline — mỗi mục label + value, xếp dọc, gap `--space-3`
- Gap giữa 2 cột: `--space-6`
- Padding block: `--section-sm` (64px)

### `.proj-decision` — Decision Card (lặp lại, dùng trong vòng lặp)
Khác với `.card` (vốn dùng cho ảnh trên/text dưới, aspect-ratio 16:9) — decision card có layout ngang.
- Container: border 1px `--color-border`, `--radius-lg`, background `--color-surface`, padding `--space-4`
- Bên trong: số thứ tự lớn muted (`--text-4xl`, `--color-text-muted`, `--fw-bold`) → heading (`--text-2xl`, `--leading-snug`) → divider mỏng → body (`--text-base`, `--color-text-body`) — ghép cặp với ảnh bên phải (desktop: grid 2 cột; mobile: stack, ảnh dưới text)
- Gap giữa các decision card: `--space-4`

### `.proj-screens` — Screen Showcase
Grid hiển thị ảnh UI cuối, 2 cột desktop / 1 cột mobile.
- `.proj-screens__item`: ảnh (border `--radius-md`) + caption italic bên dưới (`.proj-screens__caption` — `--text-sm`, `--color-text-muted`, `font-style: italic`)
- Gap: `--space-4`

### `.proj-closing` — Closing Block
Section cuối trang project, nền `--color-surface`, padding `--section-md`.
- Hàng 1: thank-you line + email (mailto link, dùng `.link-arrow` style cho hover)
- Hàng 2: nút Behance — dùng `.btn` với `--gradient-btn` fill, full-width hoặc max-width lớn, text "See full case study on Behance →"
- Hàng 3: `.link-arrow--back` ("← All projects") + `.link-arrow` ("Next project →"), 2 link cùng hàng, gap `--space-4`
- Gap giữa 3 hàng: `--space-3`

### `.hero-statement` — Homepage Hero Typography Block (project: home.css)
Khối text lớn duy nhất ở hero, không tách headline/subhead.
- Font: `--font-heading`, size responsive `--text-5xl` → `--text-6xl` desktop
- Line height: `--leading-tight`
- Màu nền: `--color-text-body` (xám) cho phần thường
- Các cụm cần nhấn: wrap bằng `<span class="text-blue">` (dùng class có sẵn, không tạo mới)

### `.contact-group` — Contact Buttons (sống trong `.contact`, home.css)
- LinkedIn: `.btn` variant chuẩn
- Email pill: dùng `.pill` + nút "Copy" nhỏ bên trong, gap nội bộ `--space-1`
- 2 element cách nhau `--space-2` (16px), căn giữa theo nhóm — đây là chỗ đã từng bị lỗi spacing quá rộng, giữ đúng `--space-2`

---

## Mapping nhanh: ý tưởng cũ → class thật

| Ý tưởng (tên cũ mình đặt) | Class thật cần dùng |
|---|---|
| SectionLabel | `.proj-tag`, `.proj-tag--dark`, `.proj-tag--accent` |
| PullQuote | `.proj-pullquote` |
| WorkCard | `.card` (có sẵn `.card--locked` cho trạng thái "Coming Soon") |
| PrimaryButton | `.btn` |
| TextLink/SecondaryButton | `.link-arrow` / `.link-arrow--back` |
| Keyword highlight trong hero | `.text-blue` (không phải tạo mới) |
| TagPill | `.pill`, `.pill--dark`, `.pill--outline` |

---

## Lưu ý khi áp dụng cho project tiếp theo (FRENlit, etc.)
- Nếu project chưa public (như FRENlit hiện tại): dùng `.card--locked` trên WorkCard ở homepage, không cần build trang detail riêng cho tới khi sẵn sàng
- `vietcharm.css` đang là legacy không import — nếu Claude Code còn để sót style cũ ở đây, nhắc dọn dẹp/xoá khi refactor để tránh CSS chết tích tụ
