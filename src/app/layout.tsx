import "@/globals.css";
import { ThemeProvider } from "../components/theme-provider";
import type { Metadata } from "next";
import Menu from "../components/Menu";
import Image from "next/image";
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
      <body className="w-screen h-screen">
        <ThemeProvider
          attribute={"class"}
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Header></Header>
          <Image
            src={"/portfolio/images/wallpaper.jpg"}
            alt="wallpaper"
            fill
            className="z-0"
          ></Image>
          <Menu />
          <main className="relative z-50">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
