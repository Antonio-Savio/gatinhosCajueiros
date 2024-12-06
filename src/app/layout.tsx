import { Suspense } from 'react'
import type { Metadata } from "next";
import "./globals.scss";
import { Header } from "@/components/header";
import Loading from '@/app/loading'

export const metadata: Metadata = {
  title: "Gatinhos Cajueiros",
  description: "Somos um projeto que viabiliza a adoção, alimentação e castração de gatos no Parque dos Cajueiros em Aracaju-SE",
  keywords: ['gatinhos cajueiros', 'adoção aracaju', 'adoção de gatos', 'gatos', 'adotar gatos Aracaju', 'castração de gatos', 'adoção sergipe'],
  openGraph: {
    title: "Gatinhos Cajueiros",
    images: [`${process.env.NEXT_PUBLIC_URL}/logo_og.jpg`]
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header/>
        <Suspense fallback={<Loading/>}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
