import Head from 'next/head';


import Image from 'next/image';
import deved from '../public/dev-ed-wave.png'
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import Nav from './Nav';
import About from './About';
import Services from './Services';
import Submit from './Submit';
import { Toaster } from 'react-hot-toast';



export default function Home() {
  return (
    <div className='md:w-3/4 mx-auto'>
       <Toaster />
      <Head>
        <title>Ikhtiaj Arif Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main className="bg-white px-10 ">
    <section className='min-h-screen'>
        <Nav/>
        <About/>
       

      </section>

      <section>
        <Services/>
        <Submit/>

      </section>


    </main>

     
    </div>
  )
}
