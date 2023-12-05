"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={children} />
          </Routes>
        </BrowserRouter>
      </body>
    </html>
  );
}
