import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dhvanit Vaghela — Independent Web Developer",
  description:
    "I design, develop and launch modern websites and digital experiences for ambitious businesses.",
  metadataBase: new URL("https://dhvanit.vercel.app"),
  openGraph: {
    title: "Dhvanit Vaghela — Independent Web Developer",
    description: "Turning ideas into digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
