import "./globals.css";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/app/lib/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://bs-cportfolio.vercel.app"),
  title: {
    default: "BSC's Portfolio | Structural Engineer & Developer",
    template: "%s | BSC",
  },
  description:
    "Structural Engineer at Arup Taiwan. Bridging Physical Structures and Digital Logic — building parametric tools, automation systems, and AI-enhanced engineering platforms.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bs-cportfolio.vercel.app",
    siteName: "BSC Portfolio",
    title: "BSC's Portfolio | Structural Engineer & Developer",
    description:
      "Structural Engineer at Arup Taiwan. Bridging Physical Structures and Digital Logic.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BSC's Portfolio | Structural Engineer & Developer",
    description:
      "Structural Engineer at Arup Taiwan. Bridging Physical Structures and Digital Logic.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/icon/BSC.png"></link>
        <link rel="apple-touch-icon" href="/icon/BSC.png"></link>
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
