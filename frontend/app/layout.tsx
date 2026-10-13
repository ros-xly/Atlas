import type { Metadata } from "next";
import "./globals.css";

import BottomNav from "../components/BottomNav";

export const metadata: Metadata = {
  title: "Float ✨",
  description: "Plan. Train. Progress.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="pb-24">
          {children}
        </main>

        <BottomNav />
      </body>
    </html>
  );
}