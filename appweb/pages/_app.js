import '../styles/globals.css'
import Layout2 from './layouts/Layout2'
import Layout1 from './layouts/Layout1'
import { SessionProvider } from "next-auth/react"


const layouts = {
  L2: Layout2,
  L1: Layout1,
};

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  const Layout = layouts[Component.layout] || ((children) => <div>{children}</div>);
  
  return (
    <Layout>
      <SessionProvider session={session}>
      <Component {...pageProps} />
      </SessionProvider>
    </Layout>
  )

}

export default MyApp
