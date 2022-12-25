import type { AppProps } from 'next/app'
import { ThemeProvider } from "@material-tailwind/react";
import '../styles/globals.css'
import HomeLayout from '../components/home-layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <HomeLayout>
        <Component {...pageProps} />
      </HomeLayout>
    </ThemeProvider>
  )
}
