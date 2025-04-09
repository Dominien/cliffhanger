import { Router } from "express";
import fetch from "node-fetch";

const router = Router();

interface PageSpeedResponse {
  lighthouseResult: {
    categories: {
      performance: { score: number };
      accessibility: { score: number };
    };
    audits: {
      [key: string]: {
        score: number;
        title: string;
        description: string;
      };
    };
  };
}

router.post("/analyze-website", async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) {
      return res.status(400).json({ error: "URL is required" });
    }

    // Call Google PageSpeed Insights API
    const apiKey = process.env.PAGESPEED_API_KEY;
    const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
      url
    )}&key=${apiKey}&strategy=mobile`;

    const response = await fetch(apiUrl);
    const data: PageSpeedResponse = await response.json();

    if (!response.ok) {
      throw new Error("Failed to analyze website");
    }

    // Extract relevant metrics
    const performance = Math.round(data.lighthouseResult.categories.performance.score * 100);
    const accessibility = Math.round(data.lighthouseResult.categories.accessibility.score * 100);
    const mobile = Math.round(data.lighthouseResult.audits["mobile-friendly"]?.score * 100 || 0);

    // Calculate overall score
    const score = Math.round((performance + accessibility + mobile) / 3);

    // Extract recommendations
    const recommendations = [
      data.lighthouseResult.audits["first-contentful-paint"]?.description,
      data.lighthouseResult.audits["interactive"]?.description,
      data.lighthouseResult.audits["largest-contentful-paint"]?.description,
    ].filter(Boolean);

    return res.json({
      score,
      performance,
      accessibility,
      mobile,
      recommendations,
    });
  } catch (error) {
    console.error("Website analysis error:", error);
    return res.status(500).json({
      error: "Failed to analyze website",
    });
  }
});

export default router;
