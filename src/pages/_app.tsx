import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Footer } from '@/components/general/footer'
import { Navbar } from '@/components/general/navbar'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='w-full flex justify-center relative'>
      <link
      href="https://fonts.googleapis.com/css?family=Bai Jamjuree"
      rel="stylesheet"
      />
      <link href='https://fonts.googleapis.com/css?family=Noto Sans Thai' rel='stylesheet'/>
      <div className=" flex flex-col items-center opensans h-auto w-[1920px] justify-center overflow-hidden">
        <Navbar/>
        <Component {...pageProps} />
        <Footer/>
      </div>
    </div>
  )
}
