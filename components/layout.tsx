import Footer from './footer'
import Meta from './meta'
import Alert from './alert'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert/>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
