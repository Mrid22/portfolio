import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import Header from "../components/Header";
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
      <body className="overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col top-0 left-0 w-screen h-screen p-0">
            <header>
              <Header />
            </header>
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
