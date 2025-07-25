import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const fontInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Devstore",
    default: "Devstore"
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${fontInter.variable}`}>
      <body
        className="antialiased bg-zinc-950 text-zinc-50"
      >
        {children}
      </body>
    </html>
  );
}
