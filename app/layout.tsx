import { ReactNode } from "react";

export const metadata = {
  title: "crossly",
  description: "A short description of your site",
  openGraph: {
    title: "Crossly",
    description: "A short description of your site",
    url: "https://crossly.netlify.app/",
    images: [
      {
        url: "https://crossly.netlify.app/coverimage.png",
        width: 1200,
        height: 630,
        alt: "Your Site Name",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://crossly.netlify.app/coverimage.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
