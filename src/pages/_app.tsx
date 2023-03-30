import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='w-full flex justify-center relative'>
      <link
      href="https://fonts.googleapis.com/css?family=Bai Jamjuree"
      rel="stylesheet"
      />
      <link href='https://fonts.googleapis.com/css?family=Noto Sans Thai' rel='stylesheet'/>
      <Component {...pageProps} />
    </div>
  )
}
