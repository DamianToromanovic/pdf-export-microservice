import express, { Response, Request } from "express";
import { htmlToPdf } from "../helpers/html-to-pdf";

const router = express.Router();

router.post("/convert", async (req: Request, res: Response) => {
  const { htmlContent, options } = req.body;

  if (!htmlContent) {
    res.status(400).json({ error: "HTML content is required" });
    return;
  }

  try {
    const pdfBuffer = await htmlToPdf(htmlContent, options);
    res.setHeader("Content-Type", "application/pdf");
    res.send(pdfBuffer);
  } catch (error) {
    console.error("PDF generation failed:", error);
    res.status(500).json({ error: "Failed to generate PDF" });
  }
});

export default router;
