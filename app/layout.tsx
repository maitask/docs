import type { Metadata } from 'next'
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
    'Official Maitask platform documentation for Plane Frontend, Plane API, Runtime, operations, and integrations.'
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout {...themeConfig} pageMap={await getPageMap()}>
          {children}
        </Layout>
      </body>
    </html>
  )
}
