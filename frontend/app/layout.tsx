// Auto-generated modification at 2025-11-28 11:52:24
// Auto-generated modification at 2025-11-28 11:52:24
// Auto-generated modification at 2025-11-28 11:52:23
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "../components/Header";
import ErrorBoundary from "../components/ErrorBoundary";

export const metadata: Metadata = {
  title: "Inheritance Rule Check",
  description: "Encrypted Inheritance Rule Check - Verify age eligibility without revealing your age",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔐</text></svg>",
        type: "image/svg+xml",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="app-container animated-bg">
          {/* Decorative floating circles */}
          <div className="floating-decoration floating-circle-1"></div>
          <div className="floating-decoration floating-circle-2"></div>
          <div className="floating-decoration floating-circle-3"></div>
          
          {/* Floating hexagons */}
          <div className="floating-hexagon floating-hexagon-1"></div>
          <div className="floating-hexagon floating-hexagon-2"></div>
          
          {/* Floating diamonds */}
          <div className="floating-diamond floating-diamond-1"></div>
          <div className="floating-diamond floating-diamond-2"></div>
          <div className="floating-diamond floating-diamond-3"></div>
          
          {/* Glow orbs */}
          <div className="glow-orb"></div>
          <div className="glow-orb-secondary"></div>
          
          {/* Aurora effect */}
          <div className="aurora-container">
            <div className="aurora-beam aurora-beam-1"></div>
            <div className="aurora-beam aurora-beam-2"></div>
            <div className="aurora-beam aurora-beam-3"></div>
          </div>
          
          {/* Grid pattern overlay */}
          <div className="grid-pattern"></div>
          
          {/* Sparkles */}
          <div className="sparkle-container">
            <div className="sparkle"></div>
            <div className="sparkle"></div>
            <div className="sparkle"></div>
            <div className="sparkle"></div>
            <div className="sparkle"></div>
            <div className="sparkle"></div>
          </div>
          
          {/* Particles */}
          <div className="particles-container">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
          </div>
          
          {/* Meteor shower */}
          <div className="meteor-container">
            <div className="meteor"></div>
            <div className="meteor"></div>
            <div className="meteor"></div>
          </div>
          
          {/* Corner decorations */}
          <div className="corner-decoration corner-top-left"></div>
          <div className="corner-decoration corner-top-right"></div>
          <div className="corner-decoration corner-bottom-left"></div>
          <div className="corner-decoration corner-bottom-right"></div>
          
          {/* Side decorations */}
          <div className="side-decoration side-decoration-left"></div>
          <div className="side-decoration side-decoration-right"></div>
          
          {/* Dots pattern */}
          <div className="dots-pattern dots-top-right"></div>
          <div className="dots-pattern dots-bottom-left"></div>
          
          <ErrorBoundary>
            <Providers>
              <main className="max-w-5xl mx-auto px-4 py-8 pb-20 relative z-10">
                <Header />
                <div className="flex flex-col gap-6 w-full mt-8 stagger-children">
                  {children}
                </div>
              </main>
            </Providers>
          </ErrorBoundary>
          
          {/* Decorative footer wave */}
          <div className="decorative-footer">
            <div className="footer-wave footer-wave-animated"></div>
          </div>
        </div>
      </body>
    </html>
  );
}

