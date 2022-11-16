import '../styles/globals.css'

import { Raleway } from "@next/font/google"

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${raleway.variable} font-sans`}>
      <head />
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
