import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JL Tree Service | Professional Tree Care in Fairfax, VA",
  description:
    "JL Tree Service provides professional tree removal, stump grinding, trimming, lot clearing, and emergency tree services in Fairfax, Centreville, Burke, Vienna, and all of Northern Virginia. Fully licensed & insured. Call (703) 935-8878.",
  keywords: "tree service Fairfax VA, tree removal, stump grinding, lot clearing, Northern Virginia",
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
