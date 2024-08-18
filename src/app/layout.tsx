import "@/styles/globals.css"
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import Header from "./_components/Header"
import { ClerkProvider } from "@clerk/nextjs"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <ClerkProvider>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased flex flex-col ",
            fontSans.variable
          )}
        >
          {/* Header */}
          <Header />
          {children}
          {/* Footer */}
        </body>
      </ClerkProvider>

    </html>
  )
}
