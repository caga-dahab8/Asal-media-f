import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Meta SEO */}
        <meta name="description" content="Asal Media Group Corporate Website" />
        <link rel="icon" href="/favicon.ico" />
        {/* Fonts Example (Google Fonts) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased text-gray-900 bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
