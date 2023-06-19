import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import LoadingScreen from "../components/Preloader/LoadingScreen";
import React from "react";
import { useRouter } from 'next/router'

const poppins = Poppins({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    const handleRouteChange = (url:string) => {
      setLoading(true)
    }

    const handleRouteChangeComplete = () => {
      setLoading(false)
    }

    router.events.on('routeChangeStart', handleRouteChange)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [router.events])

  return (
    <>
    {loading ? (
      <LoadingScreen />)
    : 
      (<main className={poppins.className}>
      <Component {...pageProps} />
    </main>)
    }
</>
  );
}
