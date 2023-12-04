import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Link from 'next/link'
const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      Bikram Sambat
    </div>
  ),
  project: {
    link: 'https://github.com/askbuddie/bikram-sambat'
  },
  chat: {
    link: 'https://dsc.gg/askbuddie'
  },
  docsRepositoryBase: 'https://github.com/askbuddie/bikram-sambat',
  footer: {
    text: (
      <div style={{ margin: 'auto' }}>
        Bikram Sambat by{' '}
        <Link style={{ color: 'white' }} href="https://github.com/askbuddie/">
          Ask Buddie
        </Link>
      </div>
    )
  },
  primaryHue: {
    light: 15,
    dark: 20
  },
  useNextSeoProps: () => ({
    titleTemplate: '%s – Bikram Sambat'
  })
}

export default config
