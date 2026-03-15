import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter,Playfair_Display, Lato, Newsreader } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-fashion",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-nav",
})

const newsReader = Newsreader({
  subsets: ["latin"],
  variable: "--font-news"
})

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: "400"
})

export const metadata: Metadata = {
  title: "Cleva Fashion",
  description: "Discover the latest trends in fashion and style",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${playfair.variable} ${newsReader.variable} ${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
