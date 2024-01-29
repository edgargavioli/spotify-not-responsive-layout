import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Spotify by Tailwind",
  description: "Spotify Rocketseat class",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-zinc-50">
        <div className="h-screen flex flex-col">
          <div className="flex flex-1">
            <Sidebar />
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
