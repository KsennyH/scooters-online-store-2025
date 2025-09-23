import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import 'react-loading-skeleton/dist/skeleton.css';
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Toaster } from "react-hot-toast";
import { CartLoading } from "./components/cart-loading/CartLoading";

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
    <html lang="ru">
      <body className={`${inter.variable} ${montserrat.variable}`}>
        <div className="wrapper">
            <Header />
            <main className="main">
              <Toaster />
              <CartLoading />
              {children}
            </main>
            <Footer />
        </div>
      </body>
    </html>
  );
}
