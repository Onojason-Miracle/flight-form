import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

// font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Flight Form",
  description: "A Multi step flight form with validation and progress report",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-p+U77X1J1lP4AGzUJ9FODlLoZzg6FZnYqlzKUHgDHzVoG0Pec5MjKhy0JZTqn5NnIC1CyUeKTGBaByH6e3gJ0Q=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
