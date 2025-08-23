import Header from "@/components/Header";
import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import { type Metadata } from "next";
import { Josefin_Sans, Cinzel } from "next/font/google";

export const metadata: Metadata = {
  title: "CCPP1",
  description:
    "A social media app where you can connect with friends and share your thoughts.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${josefin.variable} ${cinzel.variable}`}>
        <body>
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
