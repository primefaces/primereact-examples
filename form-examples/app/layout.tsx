import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import PrimeSSRProvider from "@/components/prime-ssr-provider";
import { ThemeProvider } from "@/components/theme-provider";
import BaseToast from "@/components/base-toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrimeReact + Form libraries",
  description:
    "The same form built with React Hook Form, TanStack Form and Formik using PrimeReact v11.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PrimeSSRProvider>
            {children}
            <BaseToast />
          </PrimeSSRProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
