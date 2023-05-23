import Image from 'next/image'
import { About, Contact, Experience, Feedbacks, Hero, Tech, Works, StarsCanvas  } from '@/components/homepage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CSA UFV | Home',
  description: 'Home page CSA UFV',
}

export default function Home() {
  return (
      <div className='relative z-0  text-white'>
        <div className=' bg-cover bg-no-repeat bg-center'>
        <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Feedbacks/>
        <div className='relative z-0'>
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
  )
}