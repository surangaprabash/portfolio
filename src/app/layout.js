import { Geist, Geist_Mono } from "next/font/google";
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
  title: {
    default: 'Suranga Prabash | Portfolio',
    template: '%s | Suranga Prabash',
  },
  description: 'Software developer portfolio site built with Next.js.',
  keywords: ['Suranga Prabash', 'Next.js developer', 'Frontend portfolio', 'Sri Lankan developer'],
  authors: [{ name: 'Suranga Prabash', url: 'https://surangaprabash.me' }],

  openGraph: {
    title: 'Suranga Prabash | Portfolio',
    description: 'Explore Suranga’s projects, skills, and contact info.',
    url: 'https://surangaprabash.me',
    siteName: 'Suranga Prabash',
    locale: 'en_US',
    type: 'website',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
