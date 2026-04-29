import './globals.css'

export const metadata = {
  title: 'Modern Remodeling — Your Trusted Restoration Specialist',
  description: 'Modern Remodeling works side-by-side with you through the insurance process to restore your home to pre-loss condition.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        {/* Sticky Header */}
        <header className="fixed top-0 w-full bg-white/95 backdrop-blur z-50 border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
            <a href="#" className="flex-shrink-0">
              <img src="/jl_logo.png" alt="Modern Remodeling" className="h-10 w-auto" />
            </a>
            <div className="flex items-center gap-4">
              <a href="#" className="hidden sm:inline-flex items-center text-slate text-sm font-medium hover:text-burgundy transition">
                ← Back to Top
              </a>
              <a href="tel:7033619944" className="inline-flex items-center gap-2 bg-burgundy text-white px-5 py-2 rounded-lg font-semibold hover:bg-burgundy/90 transition text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                703-361-9944
              </a>
            </div>
          </div>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-slate text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <a href="#">
              <img src="/jl_logo.png" alt="Modern Remodeling" className="h-12 mx-auto mb-6 brightness-0 invert" />
            </a>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-blue-gray mb-4">
              <a href="tel:7033619944" className="hover:text-white transition">703-361-9944</a>
              <span className="hidden sm:inline">|</span>
              <a href="https://modernremod.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">modernremod.com</a>
            </div>
            <p className="text-white/50 text-sm">Modern Remodeling — Your Trusted Restoration Specialist</p>
            <p className="text-white/40 text-sm mt-1">10550 Associates Ct., Manassas, VA 20109 · Serving Northern Virginia, Maryland, and DC</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
