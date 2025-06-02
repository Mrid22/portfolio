import "@/globals.css";
import { ThemeProvider } from "../components/theme-provider";
import type { Metadata } from "next";
import Menu from "../components/Menu";
import Image from "next/image";
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
          <Image src={"images/wallpaper.jpg"} alt="wallpaper" fill></Image>
          <Menu />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
