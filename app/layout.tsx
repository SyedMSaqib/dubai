import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { Providers } from "./providers"
import Navbar from "../components/layout/navbar"
import Footer from "@/components/layout/Footer"
import StoreProvider from "./StoreProvider"

const tripSans = localFont({
  src: [
    // { path: "./fonts/TripSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/TripSans-Regular.woff", weight: "400", style: "normal" },
    // { path: "./fonts/TripSans-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/TripSans-Bold.woff", weight: "700", style: "normal" },
  ],
  variable: "--font-trip-sans",
  weight: "400 700",
})

export const metadata: Metadata = {
  title: "Dubai Tourism",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={tripSans.variable}>
        <StoreProvider>
          <Providers>
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </StoreProvider>
      </body>
    </html>
  )
}
