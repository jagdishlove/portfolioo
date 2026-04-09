import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import {
  ScrollToTopButton,
  ScrollProgressBar,
} from "@/components/ui/scroll-to-top";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Jagdish Mehra | Creative Developer",
  description:
    "Front-end developer crafting pixel-perfect digital experiences with modern web technologies",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon/favicon.ico",
      },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <my-widget project-id="a0a09f26-3620-4a12-81ce-aa6f2d6c8c47"></my-widget>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <ScrollProgressBar />
          {children}

          <Script
            src="http://thoughtsyde.vercel.app//widget.umd.js"
            strategy="afterInteractive"
          />
          <ScrollToTopButton />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
