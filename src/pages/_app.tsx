import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='w-full flex justify-center relative'>
      <Component {...pageProps} />
    </div>
  )
}
