import type { Metadata, Viewport } from 'next'
import { Head } from 'nextra/components'
import { Layout } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import themeConfig from '../theme.config'

export const metadata: Metadata = {
  metadataBase: new URL('https://docs.maitask.com'),
  title: {
    default: 'Maitask Documentation',
    template: '%s | Maitask Documentation'
  },
  description:
    'Official Maitask platform documentation for Plane Frontend, Plane API, Runtime, operations, and integrations.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg'
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f7f8' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' }
  ]
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head
        color={{
          hue: { light: 0, dark: 0 },
          saturation: { light: 0, dark: 0 },
          lightness: { light: 9, dark: 96 }
        }}
        backgroundColor={{
          light: '#f7f7f8',
          dark: '#09090b'
        }}
      >
        <style>{`html.dark .brand-mark { filter: invert(1); }`}</style>
      </Head>
      <body>
        <Layout {...themeConfig} pageMap={await getPageMap()}>
          {children}
        </Layout>
      </body>
    </html>
  )
}
