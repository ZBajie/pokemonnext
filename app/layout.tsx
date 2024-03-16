import type { Metadata } from "next"
import "./styles/style.scss"

export const metadata: Metadata = {
  title: "Pokemons",
  description: "Pokemons page to display all pokemons",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
