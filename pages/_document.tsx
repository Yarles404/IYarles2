import { Html, Head, Main, NextScript } from 'next/document'
import IYarlesNavbar from '../components/navbar'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <body>
        <div className="container">
          <IYarlesNavbar />
          <Main />
        </div>


        <NextScript />
        <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"></script>
        <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/collapse.js"></script>
      </body>
    </Html>
  )
}
