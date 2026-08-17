import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const display = Barlow_Condensed({ variable: "--font-display", subsets: ["latin"], weight: ["500", "600", "700", "800"], display: "swap" });
const sans = Inter({ variable: "--font-sans", subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#111315" };
export const metadata: Metadata = {
  metadataBase: new URL("https://sospneus-c5925.web.app"),
  title: "SOS Pneus Guarapuava | Pneus, Oficina e Troca de Óleo",
  description: "Pneus novos e remold, recapagens, alinhamento, balanceamento, freios, suspensão, troca de óleo e mecânica em Guarapuava, PR.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "pt_BR", title: "SOS Pneus Guarapuava", description: "Pneus, oficina e troca de óleo em Guarapuava.", images: [{ url: "/og.png", width: 1744, height: 907, alt: "SOS Pneus Guarapuava" }] },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body className={`${display.variable} ${sans.variable}`}>{children}</body></html>; }
