/* eslint-disable @typescript-eslint/no-require-imports */
import type { Metadata } from "next";
import { MainDataContextProvider } from "@/Contexts";
import { ReactNode } from "react";
import { geistMono, geistSans } from "@/Constants";
import "./../styles/globals.css";

export const metadata: Metadata = {
  title: "Orçamento | Pedido",
  description: "Orçamento | Pedido",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MainDataContextProvider>{children}</MainDataContextProvider>
      </body>
    </html>
  );
}
