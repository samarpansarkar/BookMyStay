import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import { getUserSession } from "@/lib/session";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BookMyStay",
  description: "India's #1 Home Stay Platform",
};

export default async function RootLayout({ children }) {
  const session = await getUserSession();

  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar session={session} />
        {children}
      </body>
    </html>
  );
}
