# Fix: "Could not save your application"

This error means your **live** Apps Script is still the old version.

## Quick check

Open your Web app URL in the browser (from `.env`).

| You see | Meaning |
|---------|---------|
| `{"ok":true,"sheet":"Leads","hint":"..."}` | ✅ Script is updated |
| `{"ok":true,"sheet":"Leads"}` only (no `hint`) | ❌ Old script — follow steps below |

## Fix (5 minutes)

1. Open your **Google Sheet** → **Extensions → Apps Script**

2. Select **all** code in `Code.gs` and **delete** it

3. Open this file on your computer:  
   `web/google-apps-script/Code.gs`  
   Copy **everything** → paste into Apps Script → **Save** (Ctrl/Cmd+S)

4. Run **`setupSheet`** once (dropdown → Run → Allow access)

5. **Deploy → Manage deployments**
   - Click the **pencil (Edit)** icon on the active deployment
   - **Version:** New version
   - **Execute as:** Me
   - **Who has access:** Anyone
   - Click **Deploy**

6. Do **not** change the URL in `.env` if it stays the same

7. Test again in browser — URL should show `"hint"` in the JSON

8. Submit the form on http://localhost:5173 — row appears in **Leads** tab

## Still stuck?

- **Apps Script → Executions** — red errors show the real problem
- Make sure the script is bound to the **same spreadsheet** you are checking
- Restart: `npm run dev`
