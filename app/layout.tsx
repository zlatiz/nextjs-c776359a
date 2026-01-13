import type { ReactNode } from "react";
import "./globals.css";
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Welcome to John Keane Studios'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;600;700&family=Space+Grotesk:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
