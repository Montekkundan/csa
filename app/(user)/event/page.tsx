

import Banner from '@/components/Banner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Similarity API | Home',
  description: 'Free & open-source text similarity API',
}

export default function Home() {
  return (
    <div >
      <Banner/>
    </div>
  )
}