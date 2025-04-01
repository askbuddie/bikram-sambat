import { Footer, Layout, Link, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import 'nextra-theme-docs/style.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bikram-Sambat',
  description: 'Bikram Sambat calendar system'
}

const footer = (
  <Footer>
    <div style={{ margin: 'auto' }}>
      Bikram Sambat by{' '}
      <Link style={{ color: 'red' }} href="https://github.com/askbuddie/">
        Ask Buddie
      </Link>
    </div>
  </Footer>
)

export default async function RootLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        {/* KaTeX CSS */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex/dist/katex.min.css"
        />
      </Head>
      <body>
        <Layout
          navbar={
            <Navbar
              logo={
                <>
                  <span style={{ marginLeft: '.4em', fontWeight: 600,  }}>
                    Bikram Sambat
                  </span>
                </>
              }
              projectLink="https://github.com/askbuddie/bikram-sambat"
              chatLink="https://dsc.gg/askbuddie"
            />
          }
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/askbuddie/bikram-sambat"
          editLink="Edit this page on GitHub"
          sidebar={{ defaultMenuCollapseLevel: 1, autoCollapse: true }}
          footer={footer}>
          {children}
        </Layout>
      </body>
    </html>
  )
}
