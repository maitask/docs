import { Footer, Navbar } from 'nextra-theme-docs'

const config = {
  navbar: (
    <Navbar logo={<strong>Maitask Docs</strong>} projectLink='https://github.com/maitask' />
  ),
  docsRepositoryBase: 'https://github.com/maitask/maitask/tree/main/docs',
  footer: <Footer>{`MIT ${new Date().getFullYear()} © Maitask`}</Footer>,
  feedback: {
    content: 'Question or issue? Open a discussion.'
  },
  editLink: 'Edit this page on GitHub',
  toc: {
    backToTop: 'Back to top'
  },
  sidebar: {
    autoCollapse: true,
    defaultMenuCollapseLevel: 1
  }
}

export default config
