import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header/Header";
import { HeaderActions } from "./components/header-actions/HeaderActions";

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['600', '700'],
})

export const metadata: Metadata = {
  title: "Электросамокаты",
  description: "Интернет-магазин электросамокатов",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable}`}>
        <Header />
        <HeaderActions />
        {children}
      </body>
    </html>
  );
}
