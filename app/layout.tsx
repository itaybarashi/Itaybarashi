import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Heebo } from 'next/font/google'
import './globals.css'

const heebo = Heebo({
  variable: '--font-heebo',
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400', '500', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'GRAVITAS · קליסטניקס, עמידות ידיים, תנועה',
  description:
    'GRAVITAS — אימוני קליסטניקס, אקרובטיקה ותנועה בנס ציונה.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#28241f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} dark`}>
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
