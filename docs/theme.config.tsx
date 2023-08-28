import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'
const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <Image src={'/logo.png'} height={50} width={50} alt="askbuddie logo" />
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
    text: 'Bikram Sambat by Ask Buddie'
  },
  primaryHue: {
    light: 15,
    dark: null
  }
}

export default config
