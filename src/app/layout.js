import { Outfit } from "next/font/google";
import "./globals.css";

const outer = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outer",
});

export const metadata = {
  icons: {
    icon: [
      {
        url: `${process.env.API_URI}/logo.svg`,
        href: `${process.env.API_URI}/logo.svg`,
      },
    ],
  },
  openGraph: {
    title: "Jyotish Gyan Kendra - Best Astrologer in Siliguri",
    description:
      "Looking for best Astrologer in Siliguri, Dr Suvabrata Bharati is one of the best astrologer in Siliguri famous for love marriage vastu kundali astrology services.",
    images: {
      url: `${process.env.API_URI}/logo.svg`,
    },
  },
  keywords: [
    "Best Astrologer in Siliguri",
    "Best Astrologer in Jalpaiguri",
    "Best Astrologer in Darjeeling",
    "Best Astrologer in Gangtok",
    "Best Astrologer in Cooch Behar",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outer.className} antialiased`}>{children}</body>
    </html>
  );
}
