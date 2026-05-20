import type { QualifyFormData } from "../data/content";

export class SheetsNotConfiguredError extends Error {
  constructor() {
    super(
      "Google Sheets is not connected. Add VITE_GOOGLE_SHEETS_URL to your .env file.",
    );
    this.name = "SheetsNotConfiguredError";
  }
}

function buildSubmitUrl(baseUrl: string, data: QualifyFormData): string {
  const params = new URLSearchParams({
    name: data.name,
    email: data.email,
    brand: data.brand,
    storeUrl: data.storeUrl || "",
    platform: data.platform,
    category: data.category,
    monthlyRevenue: data.monthlyRevenue,
    googleAdsStatus: data.googleAdsStatus,
    helpWith: data.helpWith.join("||"),
    adSpend: data.adSpend,
    timeline: data.timeline,
    phone: data.phone,
    notes: data.notes || "",
  });

  return `${baseUrl}?${params.toString()}`;
}

export async function submitToGoogleSheets(
  data: QualifyFormData,
): Promise<void> {
  const baseUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL?.trim();
  if (!baseUrl) throw new SheetsNotConfiguredError();

  const url = buildSubmitUrl(baseUrl, data);
  const response = await fetch(url, { method: "GET" });
  const text = await response.text();

  let result: { success?: boolean; error?: string; ok?: boolean };
  try {
    result = JSON.parse(text) as typeof result;
  } catch {
    throw new Error(
      "Google Sheets returned an invalid response. Redeploy the Apps Script web app (see google-apps-script/README.md).",
    );
  }

  if (result.success === true) return;

  if (result.ok === true && !result.success) {
    throw new Error(
      "Apps Script is outdated. Paste the latest Code.gs into Google Apps Script, then Deploy → New version.",
    );
  }

  throw new Error(
    result.error ??
      "Could not save your application. Check Apps Script → Executions for errors.",
  );
}
