import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import Header from "../components/Header";
import Footer from "../components/Footer";
export const metadata: Metadata = {
  title: "Mridul Agarwal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col top-0 left-0 w-screen h-screen ">
            <header>
              <Header />
            </header>
            <main>{children}</main>
            <footer className="z-50">
              <Footer />
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
