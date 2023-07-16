'use client'
import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//     title: 'Zen-Note',
//     description: 'Yet another Note-Taking App',
// }

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    // useEffect(() => {
    //     if ('serviceWorker' in navigator) {
    //         navigator.serviceWorker.register(`/zennote/sw.js`)
    //     }
    // }, [])
    return (
        <html lang="en">
            <head>
                <link rel="manifest" href={`/zennote/manifest.json`} />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    )
}
