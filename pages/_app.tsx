import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout title="Asal Media Group">
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
