import "@/globals.css";
import { ThemeProvider } from "../components/theme-provider";
import type { Metadata } from "next";
import Menu from "../components/Menu";
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
          attribute={"class"}
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Menu />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
