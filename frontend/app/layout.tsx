// Auto-generated modification at 2025-11-28 11:52:24
// Auto-generated modification at 2025-11-28 11:52:24
// Auto-generated modification at 2025-11-28 11:52:23
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "../components/Header";

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
        <div className="app-container">
          <Providers>
            <main className="max-w-5xl mx-auto px-4 py-8 pb-20 relative z-10">
              <Header />
              <div className="flex flex-col gap-6 w-full mt-8">
                {children}
              </div>
            </main>
          </Providers>
        </div>
      </body>
    </html>
  );
}

