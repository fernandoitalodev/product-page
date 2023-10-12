"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import { CartContext, CartProvider } from './components/context/CartContext'
import { useContext } from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 
  return (
    <html lang="en">
      <body className={`h-[100vh] ${inter.className}`}>
      <CartProvider>
        <Header/>
        {children}
      </CartProvider>
        </body>
    </html>
  )
}
