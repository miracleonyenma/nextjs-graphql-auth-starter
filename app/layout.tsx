import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/Site/Header";
import { Toaster } from "@/components/ui/sonner";
import Auth from "@/components/Auth";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <Auth />
        <div>{children}</div>
      </body>
      <Toaster position="top-center" offset={"2rem"} theme="system" />
    </html>
  );
}