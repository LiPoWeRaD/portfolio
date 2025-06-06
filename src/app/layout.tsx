import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LiPoWeRaD Portfolio",
  description: "My Portfolio Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={` ${geistSans.variable} ${geistMono.variable} antialiased bg-primary font-FiraCode  min-h-screen flex flex-col  text-white`}
      >
        
        <Header />
        
          {children}
        
        <Footer />
      </body>
    </html>
  );
}
