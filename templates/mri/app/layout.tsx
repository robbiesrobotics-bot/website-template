import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Modern Remodeling — Your Trusted Restoration Specialist",
  description:
    "Modern Remodeling works side-by-side with you through the insurance process to restore your home to pre-loss condition. Serving Manassas and all of Northern Virginia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}
