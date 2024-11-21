/* eslint-disable @typescript-eslint/no-require-imports */
import type { Metadata } from "next";
import localFont from "next/font/local";
import { MainDataContextProvider } from "@/Contexts";
import { ReactNode } from "react";
import "./globals.css";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

require("dotenv").config();

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
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const firebaseConfig = {
    apiKey: process.env.API_KEY_FIREBASE,
    authDomain: "diy-orcamento-db.firebaseapp.com",
    projectId: "diy-orcamento-db",
    storageBucket: "diy-orcamento-db.firebasestorage.app",
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
    databaseURL: "https://default.firebaseio.com",
  };

  const app = initializeApp(firebaseConfig);
  getDatabase(app);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MainDataContextProvider>{children}</MainDataContextProvider>
      </body>
    </html>
  );
}
