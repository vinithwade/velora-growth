# Velora Growth — Agency Website

A performance marketing agency landing page inspired by [Becks & Clates](https://becksandclates.com), rebuilt with a distinct India-focused design (warm cream, saffron, teal) and the same core features.

## Features

- Hero with ROI guarantee, stats, and CTAs
- 9-step qualification form (`#qualify`)
- Statistics, case study carousel, problem/solution sections
- Three-lever services (Acquisition, Conversion, Follow-up)
- Who it's for / not for filter
- FAQ accordion, news/insights, final CTA
- Sticky header with client marquee

## View registered clients (Google Sheets)

Form submissions are saved to a **Google Sheet** — not in the website admin.

1. Follow **[google-apps-script/README.md](./google-apps-script/README.md)** (one-time setup).
2. Add your Apps Script URL to `.env`:

   ```env
   VITE_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/...../exec
   ```

3. Open the spreadsheet → **Leads** tab. Each application is one row.

## Customize your agency

Edit `src/config/agency.ts` for name, location, guarantee, and contact details.  
Edit `src/data/content.ts` for stats, case studies, FAQs, and form options.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

## Deploy on Vercel (form submissions)

Your local `.env` file is **not** uploaded to Vercel. Without this step, the apply form will show a “not connected to Google Sheets” error.

1. Copy the value of `VITE_GOOGLE_SHEETS_URL` from your local `.env` (the Google Apps Script **Web app** URL ending in `/exec`).
2. In [Vercel](https://vercel.com) → your project → **Settings** → **Environment Variables**.
3. Add:
   - **Name:** `VITE_GOOGLE_SHEETS_URL`
   - **Value:** `https://script.google.com/macros/s/...../exec`
   - **Environments:** Production (and Preview if you test preview URLs)
4. **Redeploy** the project (Deployments → ⋯ on latest → Redeploy).  
   Vite bakes env vars in at **build time**, so a redeploy is required after adding or changing the variable.

Confirm Apps Script is deployed with **Who has access: Anyone** (see `google-apps-script/README.md`).
