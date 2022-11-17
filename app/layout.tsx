import '../styles/globals.css'

import { Raleway, Playfair_Display } from "@next/font/google"

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfairDisplay',
})

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html className={`${raleway.variable} ${playfairDisplay.variable} font-sans`}>
      <head />
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
