import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Cover } from '@/components/home/cover'
import { ServiceH } from '@/components/home/service'
import { GalleryH } from '@/components/home/gallery'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" flex flex-col items-center opensans h-auto">
        <Cover/>
        <ServiceH/>
        <GalleryH/>
      </div>
    </>
  )
}
