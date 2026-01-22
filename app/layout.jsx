import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BSC's Portfolio | Engineer & Developer",
  description:
    "Bridging the gap between Structural Engineering and Software Development. Specializing in BIM Automation, FEM Analysis, and Modern Digital Tech.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/icon/BSC.png"></link>
        <link rel="apple-touch-icon" href="/icon/BSC.png"></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
