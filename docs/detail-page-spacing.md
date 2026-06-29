# Detail Page Template

Template hoàn chỉnh cho tất cả trang detail (`/vietcharm/`, `/graphics/`, và các trang mới).  
File CSS chính: `public/css/project.css` — `public/css/variables.css`.

---

## Cấu trúc trang

```
<nav>                        ← không có class nav--hero (nav luôn visible)
<main>
  <div class="container">
    <header class="project-header">   ← tiêu đề + meta
  </div>

  <div class="container">
    [cover image — optional]
    <section class="project-section fade-up"> × N
  </div>

  [Behance link — optional]

  <section class="section contact">   ← luôn có, luôn cuối trang
</main>

<script> nav.js + copyEmail + fade-up observer + lazy-image wrapper
```

---

## 1. Header — `.project-header`

```html
<header class="project-header">
  <a href="/#works" class="project-back">← Back to home</a>

  <h1 class="project-title">Tên Project</h1>

  <div class="project-meta">
    <div class="project-meta__item">
      <span class="project-meta__label">Role</span>
      <span class="project-meta__value">UX/UI Designer</span>
    </div>
    <!-- thêm các item tuỳ project -->
  </div>
</header>
```

**Meta fields có thể dùng:** Role · Duration · Project Type · Platform · Tags  
(Role luôn có. Các trường còn lại tự chọn — thêm hoặc bỏ tuỳ project.)

**Spacing header (riêng, không theo template A/B/C/D):**

| | Desktop | Mobile |
|---|---|---|
| Back link → Title | `40px` (`--space-5`, `margin-bottom` trên `.project-back`) | `24px` (`--space-3`) |
| Title → Meta row | `32px` (`--space-4`, `margin-top` trên `.project-meta`) | `24px` (`--space-3`) |
| Label → Value trong meta item | `8px` (`gap` trên `.project-meta__item`) | `0px` |

---

## 2. Cover image — optional

```html
<div class="project-section__cover">
  <img src="..." alt="..." loading="lazy" decoding="async" />
</div>
```

- Aspect ratio: `21/9` (enforced bởi CSS)
- Margin phía dưới (cover → section label đầu tiên): `80px` desktop / `32px` mobile

---

## 3. Content sections — spacing template

### Hierarchy

```
Section name (.section__label)
  └─ Sub label (h2)        ← optional
       └─ Content
       └─ Content          ← C giữa các content
  └─ Sub label             ← D giữa các sub label
       └─ Content
```

Nếu **không có sub label**: spacing từ Section name → Content = A (giống Section name → Sub label).

### Giá trị spacing

| Level | Desktop | Mobile | Token desktop | Token mobile |
|---|---|---|---|---|
| **Section ↔ Section** | 88px | 56px | hardcode `88px` | `--space-7` |
| **A** — Section name → Sub label / Content | 32px | 24px | `--space-4` | `--space-3` |
| **B** — Sub label → Content | 24px | 16px | `--space-3` | `--space-2` |
| **C** — Content → Content (cùng sub label) | 32px | 24px | `--space-4` | `--space-3` |
| **D** — Sub label ↔ Sub label | 40px | 32px | `--space-5` | `--space-4` |

---

## 4. Patterns HTML

### Pattern 1 — Section name + description + image (không có sub label)

Dùng trong: **Graphics Works** (mỗi brand section)

```html
<section class="project-section fade-up">
  <p class="section__label">Tên Brand</p>
  <p class="project-section__standalone-p">Mô tả ngắn...</p>
  <img src="..." alt="..." class="project-section__full-img" loading="lazy" decoding="async" />
</section>
```

Spacing: label → description = **A**, description → image = **C** (qua `margin-bottom` trên `.project-section__standalone-p`).  
⚠️ Không dùng `margin-top` inline trên `<img>` — JS lazy-wrapper bọc ảnh trong `div.img-wrap` có `overflow:hidden`, làm margin bị clip.

---

### Pattern 2 — Section name + images stack (không có sub label, không có description)

Dùng trong: **VietCharm** (Problem analysis)

```html
<section class="project-section fade-up">
  <p class="section__label">Problem analysis</p>
  <div class="problem-images">
    <img src="..." alt="..." class="project-section__full-img" loading="lazy" decoding="async" />
    <img src="..." alt="..." class="project-section__full-img" loading="lazy" decoding="async" />
  </div>
</section>
```

Spacing: label → ảnh đầu = **A**, ảnh ↔ ảnh = **C** (qua `gap` trên `.problem-images`).

---

### Pattern 3 — Section name + sub labels + content (có sub label)

Dùng trong: **VietCharm** (Objective, Design solution)

```html
<section class="project-section fade-up">
  <p class="section__label">Design solution</p>

  <div class="project-section__block">
    <div class="project-section__text">
      <h2>Sub Label 1</h2>
    </div>
    <img src="..." alt="..." class="project-section__full-img" loading="lazy" decoding="async" />
  </div>

  <div class="project-section__block">
    <div class="project-section__text">
      <h2>Sub Label 2</h2>
    </div>
    <img src="..." alt="..." class="project-section__full-img" loading="lazy" decoding="async" />
    <img src="..." alt="..." class="project-section__full-img" loading="lazy" decoding="async" />
  </div>
</section>
```

Spacing: label → block đầu = **A**, h2 → image = **B** (qua `margin-bottom` trên h2), image ↔ image trong cùng block = **C**, block ↔ block = **D**.

---

### Pattern 4 — Section name + 2 cột cards (Objective variant)

```html
<section class="project-section fade-up">
  <p class="section__label">Objective</p>
  <div class="project-section__cols">
    <div class="project-section__text">
      <h2>Sub Label A</h2>
      <div class="project-section__cards project-section__cards--stacked">
        <div class="project-section__card project-section__card--problem">
          <h3 class="project-section__card-heading">Problem</h3>
          <p>...</p>
        </div>
        <div class="project-section__card project-section__card--goal">
          <h3 class="project-section__card-heading">Outcome</h3>
          <p>...</p>
        </div>
      </div>
    </div>
    <div class="project-section__text">
      <h2>Sub Label B</h2>
      <!-- cards tương tự -->
    </div>
  </div>
</section>
```

---

### Pattern 5 — Section name + text (What's next variant)

```html
<section class="project-section fade-up">
  <div class="grid">
    <div style="grid-column: 5 / span 4;">
      <p class="section__label">What's next</p>
      <p class="project-section__standalone-p">Nội dung...</p>
    </div>
  </div>
</section>
```

---

## 5. Behance link — optional

```html
<div class="container">
  <div class="project-bottom">
    <a href="https://www.behance.net/gallery/..." class="btn btn--outline"
       target="_blank" rel="noopener noreferrer"
       style="width: calc(4 * (var(--container-max) - 2 * var(--container-padding) - 11 * var(--space-3)) / 12 + 3 * var(--space-3)); justify-content: center;">
      View project on Behance
    </a>
  </div>
</div>
```

---

## 6. Contact section — luôn có, luôn cuối trang

Copy từ `vietcharm/index.html` hoặc `graphics/index.html` — HTML giống nhau hoàn toàn.

---

## 7. Scripts — luôn include đủ 4

```html
<script src="/public/js/nav.js"></script>

<!-- 1. copyEmail handler -->
<script>
var COPY_ICON = '...'; /* svg copy icon */
var CHECK_ICON = '...'; /* svg check icon */
function copyEmail(btn) {
  navigator.clipboard.writeText('huyisdesigning@gmail.com').then(function () {
    btn.innerHTML = CHECK_ICON;
    btn.classList.add('contact__copy-btn--copied');
    setTimeout(function () { btn.innerHTML = COPY_ICON; btn.classList.remove('contact__copy-btn--copied'); }, 2000);
  });
}
</script>

<!-- 2. Fade-up intersection observer -->
<script>
(function () {
  var sections = document.querySelectorAll('.project-section.fade-up, .contact__inner.fade-up');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
  sections.forEach(function (s) { io.observe(s); });
})();
</script>

<!-- 3. Lazy image wrapper — bắt buộc để skeleton loading hoạt động -->
<script>
(function () {
  document.querySelectorAll('img[loading="lazy"]').forEach(function (img) {
    var wrap = document.createElement('div');
    wrap.className = 'img-wrap';
    wrap.style.borderRadius = window.getComputedStyle(img).borderRadius;
    img.parentNode.insertBefore(wrap, img);
    wrap.appendChild(img);
    function onLoad() { wrap.classList.add('loaded'); }
    if (img.complete && img.naturalWidth > 0) { onLoad(); }
    else { img.addEventListener('load', onLoad); }
  });
})();
</script>
```

---

## 8. Page-specific overrides

Đặt trong `<style>` tag trong `<head>` của từng trang, sau các `<link>` CSS.

| Trang | Override | Lý do |
|---|---|---|
| `graphics/index.html` | `.project-section__full-img { border-radius: 0; }` | Ảnh brand cần full-bleed, không bo góc |

---

## 9. CSS classes reference

| Class | File | Vai trò |
|---|---|---|
| `.project-header` | project.css | Wrapper header (back link + title + meta) |
| `.project-back` | project.css | Back link — `href="/#works"` |
| `.project-title` | project.css | h1 tên project |
| `.project-meta` | project.css | Row chứa các meta item |
| `.project-meta__item` | project.css | Mỗi cặp label/value |
| `.project-section` | project.css | Wrapper section, `padding-block: 0` |
| `.section__label` | components.css | Tên section — margin-bottom = **A** |
| `.project-section__cover` | project.css | Cover image wrapper (aspect 21/9) |
| `.project-section__block` | project.css | Sub label + content group trong Design solution |
| `.project-section__text` | project.css | Wrapper h2 sub label |
| `.project-section__cols` | project.css | 2-col grid (dùng trong Objective) |
| `.project-section__cards` | project.css | Flex wrapper cho cards |
| `.project-section__cards--stacked` | project.css | Cards vertical — margin-top = **B** |
| `.project-section__full-img` | project.css | Ảnh full-width, border-radius `--radius-lg` |
| `.project-section__standalone-p` | project.css | Đoạn văn mô tả — margin-bottom = **C** |
| `.problem-images` | project.css | Stack ảnh no-sub-label — gap = **C** |
| `.project-bottom` | project.css | Wrapper Behance button |

---

## 10. Spacing tokens tham chiếu

```
--space-1  =  8px
--space-2  = 16px
--space-3  = 24px
--space-4  = 32px
--space-5  = 40px
--space-6  = 48px
--space-7  = 56px
--space-10 = 80px
```

Định nghĩa đầy đủ trong `public/css/variables.css`.
