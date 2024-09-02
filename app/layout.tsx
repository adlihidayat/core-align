import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HYPFO 334 | Elevate Your Game",
  description: "an app that showcase shoes from core align that name hypfo 335",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
