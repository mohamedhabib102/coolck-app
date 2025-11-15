import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// إعداد خط Poppins
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TimeMaster – Smart Timer",
  description: "Smart timer to track, pause, reset, and log sessions. Customizable design.",
  icons: {
    icon: "/logo-app.svg",         
  },
  openGraph: {
    title: "TimeMaster – Smart Timer",
    description: "Smart timer to track, pause, reset, and log sessions. Customizable design.",
    url: "https://coolck-app.vercel.app/",
    siteName: "TimeMaster",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "TimeMaster Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
