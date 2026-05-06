import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Daly Games",
  description: "Seu site favorito de jogos!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
