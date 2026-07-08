import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: {
    template: '%s - TactCheck Documentation'
  },
  description: 'TactCheck Documentation'
}

const navbar = (
  <Navbar
    logo={<span>TactCheck Documentation</span>}
    projectLink="https://github.com/DROG-group/tactcheck-docs"
  />
)

const footer = <Footer>TactCheck</Footer>

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/DROG-group/tactcheck-documentation"
          editLink={null}
          feedback={{ content: null }}
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
