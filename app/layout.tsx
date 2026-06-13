import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DoomScroll Tracker — Quantify Your Social Media Time Waste",
  description: "Track time wasted on social media with shame metrics and productivity impact calculations. Stop doomscrolling, start reclaiming your life."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="da46b030-80e2-4cce-9ed8-88491fd6b41d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
