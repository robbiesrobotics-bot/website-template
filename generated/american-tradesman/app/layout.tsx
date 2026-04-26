import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "American Tradesman Group — Commercial Contracting",
  description: "Full-service commercial contracting for buildings, apartment complexes, and property management companies. One team, one standard, one point of accountability.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white text-[#2D2D2D] antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
        <main>{children}</main>
      </body>
    </html>
  )
}
