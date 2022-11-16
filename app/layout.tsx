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
    <html>
      <head />
      <body>
        <main className={`${raleway.variable} font-sans`}>
          {children}
        </main>
      </body>
    </html>
  )
}
