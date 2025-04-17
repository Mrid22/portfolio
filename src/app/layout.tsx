import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
impot Footer from "../components/Footer";
export const metadata: Metadata = {
  title: "Mridul Agarwal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Header />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
