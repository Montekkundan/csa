import Banner from '@/components/Banner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CSA UFV | Events',
  description: 'Events page of CSA UFV',
}

export default function Home() {
  return (
    <div >
      <Banner/>
    </div>
  )
}