import type { Metadata } from "next";
import "./globals.scss";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Gatinhos Cajueiros",
  description: "Somos um projeto que viabiliza a adoção, alimentação e castração de gatos no Parque dos Cajueiros em Aracaju-SE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
