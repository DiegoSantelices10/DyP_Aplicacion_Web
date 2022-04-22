import '../styles/globals.css'
import Container from '../components/container'
import { SessionProvider } from "next-auth/react"


function MyApp({ Component, pageProps: {session, ...pageProps} }) {
 
  
  return (
    <Container>
      <SessionProvider session={session}>
        
      <Component {...pageProps} />
      </SessionProvider>
    </Container>
  )

}

export default MyApp
