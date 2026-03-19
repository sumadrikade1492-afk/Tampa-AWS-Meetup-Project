const express = require("express");
const cors = require("cors");
const { chromium } = require("playwright");

const app = express();
app.use(cors());

// Meetup Events API
app.get("/api/events", async (req, res) => {
  try {
    const browser = await chromium.launch({
      headless: true, // run in background
    });

    const page = await browser.newPage();

    // Open Meetup events page
    await page.goto(
      "https://www.meetup.com/tampa-bay-aws-group/events/",
      {
        waitUntil: "networkidle",
      }
    );

    // Wait for events to load
    await page.waitForSelector("a[href*='/events/']", {
      timeout: 15000,
    });

    // Extract data
    const events = await page.evaluate(() => {
      const elements = document.querySelectorAll("a[href*='/events/']");
      let data = [];

      elements.forEach((el) => {
        const title = el.innerText.trim();
        const link = el.href;

        if (title && link && title.length > 5) {
          data.push({
            title,
            link,
          });
        }
      });

      return data;
    });

    await browser.close();

    // Remove duplicates
    const uniqueEvents = Array.from(
      new Map(events.map((e) => [e.link, e])).values()
    );

    res.json(uniqueEvents.slice(0, 10));
  } catch (error) {
    console.log("PLAYWRIGHT ERROR:", error.message);
    res.status(500).send("Error fetching events");
  }
});

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});