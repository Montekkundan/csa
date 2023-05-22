import Image from 'next/image'
import Link from 'next/link'
import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Similarity API | Home',
  description: 'Free & open-source text similarity API',
}

export default function Home() {
  return (
    <div className='relative h-screen flex items-center justify-center '>
      <div className='container pt-32 md:pt-0 max-w-7xl w-full mx-auto h-full'>
        <div className='h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start'>
          <LargeHeading
            size='lg'
            className='three-d text-black dark:text-light-gold'>
            UFV CSA
          </LargeHeading>

          <Paragraph className='max-w-xl lg:text-left'>
          UFV’s Computing Student Association exists to represent computing students to UFV faculty and Staff. We provide a space for students to hang out, make friends, and inquire about tutoring or help with projects. We manage the Student Computing Centre (SCC) in room D224 in D-building at the Abbotsford campus. If you have an event you want to organize, or a project you would like to run, talk with us and we’ll work with you to make it happen.
          </Paragraph>

          <div className='relative w-full max-w-xl lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute'>
            <Image
              priority
              className='img-shadow '
              quality={100}
              style={{ objectFit: 'contain' }}
              fill
              src='/csalogo.png'
              alt='logo'
            />
          </div>
        </div>
      </div>
    </div>
  )
}