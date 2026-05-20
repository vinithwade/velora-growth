# Connect form submissions to Google Sheets

Every completed application on your site will appear as a **new row** in your Google Sheet.

## Step 1 — Create a spreadsheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet.
2. Name it something like **Velora Growth — Leads**.

## Step 2 — Add the script

1. In the sheet: **Extensions → Apps Script**.
2. Delete any default code in `Code.gs`.
3. Copy everything from [`Code.gs`](./Code.gs) in this folder and paste it into the editor.
4. Click **Save** (name the project e.g. `Lead Form`).

## Step 3 — Create the “Leads” tab with headers

1. In Apps Script, select the function **`setupSheet`** in the dropdown.
2. Click **Run**.
3. Approve permissions when Google asks (your Google account only).
4. Go back to the spreadsheet — you should see a **Leads** sheet with column headers.

## Step 4 — Deploy as a web app

1. **Deploy → New deployment**.
2. Type: **Web app**.
3. Settings:
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Click **Deploy** and authorize if prompted.
5. Copy the **Web app URL** (looks like `https://script.google.com/macros/s/...../exec`).

> **Important:** After you change the script, use **Deploy → Manage deployments → Edit → Version: New version → Deploy** so the live URL picks up changes. If rows still don't appear, you likely need this redeploy step.

### Troubleshooting: data not saving

1. Confirm **Leads** sheet exists (run `setupSheet` once).
2. **Redeploy** the web app (new version) after pasting updated `Code.gs`.
3. Test in browser: open your web app URL — you should see `{"ok":true,"sheet":"Leads"}`.
4. Restart `npm run dev` after changing `.env`.

## Step 5 — Connect your website

In the project root (`web/`), create a file named `.env`:

```env
VITE_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Restart the dev server:

```bash
npm run dev
```

## Where to see registered clients

Open your Google Sheet → **Leads** tab.

Each submission adds one row with:

| Column | Content |
|--------|---------|
| Submitted At | Date & time |
| Name, Email, Brand, Store URL | Contact & store info |
| Platform, Category, Monthly Revenue | D2C qualification |
| Google Ads Status, Help With | Ads maturity & needs |
| Monthly Ad Spend, Timeline | Budget & urgency |
| Phone / WhatsApp, Notes | Contact & audit notes |

You can sort, filter, and share this sheet with your team like any spreadsheet.

## Test it

1. Open your site → **Book My Free Growth Audit** form → complete all steps → submit.
2. Refresh the **Leads** sheet — a new row should appear within a few seconds.

If nothing appears, check **Apps Script → Executions** for errors and confirm deployment access is **Anyone**.
