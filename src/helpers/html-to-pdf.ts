import puppeteer from "puppeteer";

const defaultOptions = {
  format: "A4",
  printBackground: true,
} as const;

export const htmlToPdf = async (
  htmlContent: string,
  options = defaultOptions
): Promise<Buffer> => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: "domcontentloaded" });

    const pdfData = await page.pdf(options);
    const pdfBuffer = Buffer.from(pdfData);

    await browser.close();

    return pdfBuffer;
  } catch (error) {
    console.error("Error generating PDF:", error);
    throw error;
  }
};
