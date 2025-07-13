import type { Metadata } from "next";
import { Josefin_Sans, Cinzel } from "next/font/google";
import "./global.css";

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
})

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Suryakant | Portfolio",
  description: "Hi, I'm Suryakantv Kumar. A Frontend Developer from India. This is my portfolio where you can find my projects, blogs, skills and my learning journey."
}

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={`${josefin.variable} ${cinzel.variable} antialized`}>
        {children}
      </body>
    </html>
  )
}

