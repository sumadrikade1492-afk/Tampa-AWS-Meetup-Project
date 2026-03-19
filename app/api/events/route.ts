import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://www.meetup.com/tampa-bay-aws/events/ical/",
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
          Accept: "text/calendar",
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch Meetup iCal" },
        { status: 500 }
      );
    }

    const text = await res.text();

    const events = text
      .split("BEGIN:VEVENT")
      .slice(1)
      .map((block, index) => {
        const get = (key: string) => {
          const line = block
            .split("\n")
            .find((l) => l.startsWith(key));
          return line ? line.split(":").slice(1).join(":").trim() : "";
        };

        const title = get("SUMMARY");
        const date = get("DTSTART");
        const link = get("URL");
        const id = get("UID") || "event-" + index;

        return {
          id,
          title,
          date,
          link,
        };
      })
      .filter((e) => e.title);

    return NextResponse.json(events.slice(0, 75));
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch events" },
      { status: 500 }
    );
  }
}