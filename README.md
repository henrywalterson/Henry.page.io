# Portfolio — Product Designer

A personal portfolio site built with Node.js + Express + EJS.

## Setup

```bash
npm install
cp .env.example .env
# Edit .env and fill in your SMTP credentials and receiver email
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Filling in real content

All placeholder content is tagged `[PLACEHOLDER: ...]` in the views. The actual data lives in one place:

- **`/data/projects.js`** — edit this file to add real project content (titles, descriptions, images, Behance links, decisions, etc.)
- **`/views/home.ejs`** — hero copy, about text, experience timeline
- **`/views/partials/nav.ejs`** — your name in the logo
- **`/views/partials/footer.ejs`** — social links

## Adding a new project

1. Add a new object to the `projects` array in `/data/projects.js`
2. Set a unique `slug` — that becomes the URL `/project/your-slug`
3. Set `featured: true` on whichever project you want in the featured slot (only one)
4. No template changes needed

## Contact form

The form POSTs to `/contact`, sends via Nodemailer, and shows an inline success/error state without page reload.

Requires SMTP credentials in `.env` to actually deliver email.
