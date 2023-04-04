import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Cover } from '@/components/home/cover'
import { ServiceH } from '@/components/home/service'
import { GalleryH } from '@/components/home/gallery'
import { ArticleH } from '@/components/home/artical'
import { Footer } from '@/components/general/footer'
import { Navbar } from '@/components/general/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>นพพรเนิร์สซิ่งโฮม</title>
        <meta name="description" content="รับดูแลผู้สูงอายุ นพพรเนิร์สซิ่งโฮม" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo2.ico" />
      </Head>
        <section id='home'/>
        <Cover/>
        <section id='service'/>
        <ServiceH/>
        <section id='gallery'/>
        <GalleryH/>
        <section id='aboutus'/>
        <ArticleH/>
        <section id='contact'/>
    </>
  )
}
