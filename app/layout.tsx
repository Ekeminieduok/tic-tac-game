import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "crossly",
  description: "a dope off tictactoe",
  openGraph: {
    title: "crossly",
    description: "A classic game, refactored with Next.js",
    url: "https://crossly.netlify.app",
    images: [
      {
        url: "https://crossly.netlify.app/coverimage.png",
        width: 1200,
        height: 630,
        alt: "Tic·Tac·Toe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://crossly.netlify.app/coverimage.png"],
  },
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
