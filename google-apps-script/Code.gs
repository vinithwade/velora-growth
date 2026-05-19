/**
 * Velora — Save form leads to the "Leads" sheet
 *
 * DEPLOY (required after any edit):
 * Deploy → Manage deployments → Edit → Version: New version → Deploy
 * Settings: Execute as "Me", Who has access: "Anyone"
 */

const SHEET_NAME = "Leads";

function doGet(e) {
  var p = e.parameter;

  // Save lead when email is present (flat query params from the website)
  if (p && p.email) {
    try {
      return saveLead_({
        name: p.name || "",
        email: p.email,
        company: p.company || "",
        website: p.website || "",
        industry: p.industry || "",
        revenue: p.revenue || "",
        helpWith: p.helpWith ? String(p.helpWith).split("||") : [],
        adSpend: p.adSpend || "",
        timeline: p.timeline || "",
        phone: p.phone || "",
        notes: p.notes || "",
      });
    } catch (err) {
      return jsonResponse_({ success: false, error: String(err) });
    }
  }

  // Health check — open deployment URL in browser to verify
  return jsonResponse_({
    ok: true,
    sheet: SHEET_NAME,
    hint: "Script is live. Submissions arrive via the website form.",
  });
}

function saveLead_(data) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    var sheet = getOrCreateLeadsSheet_();

    sheet.appendRow([
      new Date(),
      data.name || "",
      data.email || "",
      data.company || "",
      data.website || "",
      data.industry || "",
      data.revenue || "",
      Array.isArray(data.helpWith)
        ? data.helpWith.join(", ")
        : data.helpWith || "",
      data.adSpend || "",
      data.timeline || "",
      data.phone || "",
      data.notes || "",
    ]);

    return jsonResponse_({ success: true });
  } catch (err) {
    return jsonResponse_({ success: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

/** Run once: creates Leads tab + column headers */
function setupSheet() {
  getOrCreateLeadsSheet_();
}

function getOrCreateLeadsSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    setupHeaders_(sheet);
  } else if (sheet.getLastRow() === 0) {
    setupHeaders_(sheet);
  }

  return sheet;
}

function setupHeaders_(sheet) {
  var headers = [
    "Submitted At",
    "Name",
    "Email",
    "Company",
    "Website",
    "Industry",
    "Monthly Revenue",
    "Help With",
    "Ad Spend",
    "Timeline",
    "Phone / WhatsApp",
    "Notes",
  ];

  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold");
  sheet.setFrozenRows(1);
}

function jsonResponse_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
