import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tic·Tac·Toe",
  description: "A classic game, refactored with Next.js",
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
