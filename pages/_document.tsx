import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
        <link
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />

        <Script src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"></Script>
        <Script src='https://unpkg.com/@material-tailwind/html@latest/scripts/collapse.js'></Script>
      </body>
    </Html>
  )
}
