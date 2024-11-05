import type { Metadata } from "next";
import "./globals.css";
import { MainDataContextProvider } from "@/Contexts";

export const metadata: Metadata = {
  title: "Orçamento/Pedido",
  description: "Orçamento/Pedido",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <MainDataContextProvider>
            {children}
          </MainDataContextProvider>
      </body>
    </html>
  );
}
