import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { MainDataContextProvider } from "@/Contexts";
import { ReactNode } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Orçamento/Pedido",
  description: "Orçamento/Pedido",
  title: "Orçamento/Pedido",
  description: "Orçamento/Pedido",
};

export default function RootLayout({children }:{ children: ReactNode}) {  
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MainDataContextProvider>{children}</MainDataContextProvider>
      </body>
    </html>
  );
}
