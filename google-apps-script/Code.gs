/**
 * Velora Growth — D2C Google Ads audit leads → Leads sheet
 * Deploy: Execute as Me, Who has access: Anyone
 */

const SHEET_NAME = "Leads";

function doGet(e) {
  var p = e.parameter;

  if (p && p.email) {
    try {
      return saveLead_({
        name: p.name || "",
        email: p.email,
        brand: p.brand || "",
        storeUrl: p.storeUrl || "",
        platform: p.platform || "",
        category: p.category || "",
        monthlyRevenue: p.monthlyRevenue || "",
        googleAdsStatus: p.googleAdsStatus || "",
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

  return jsonResponse_({
    ok: true,
    sheet: SHEET_NAME,
    hint: "Script is live. Audit submissions arrive via the website form.",
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
      data.brand || "",
      data.storeUrl || "",
      data.platform || "",
      data.category || "",
      data.monthlyRevenue || "",
      data.googleAdsStatus || "",
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
    "Brand",
    "Store URL",
    "Platform",
    "Category",
    "Monthly Revenue",
    "Google Ads Status",
    "Help With",
    "Monthly Ad Spend",
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
