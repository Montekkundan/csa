import Banner from '@/components/Banner'
import { client } from '@/lib/sanity.client'
import type { Metadata } from 'next'
import { groq } from 'next-sanity'
import {previewData} from 'next/headers'
import PreviewSuspense   from '../../../components/PreviewSuspense'
import PreviewBlogList from '@/components/PreviewBlogList'
import BlogList from '@/components/BlogList'
export const metadata: Metadata = {
  title: 'CSA UFV | Events',
  description: 'Events page of CSA UFV',
}

const query = groq`
*[_type == "post"]{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`
export const revalidate = 30; // revalidate the page every 30 seconds
export default async function Home() {

  if(previewData())
  {
    return (
      <div className='max-w-7xl mx-auto' >
      <Banner/>
      <div className='pl-10'>
      <div className='md:flex p-2 mb-3 rounded-lg border-2 border-[#F7AB0A] max-w-sm m-0 justify-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% '>
      <h1 className='font-bold text-black'>In preview mode</h1>
      </div>
      </div>
      <PreviewSuspense fallback={ 
          <div role='status'>
            <p className='text-center text-lg animate-pluse text-[#F7AB0A]'>
              Loading preview data...
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
        </PreviewSuspense>
    </div>
    )
  }

  const posts  = await client.fetch(query)
  return (
    <div className='max-w-7xl mx-auto' >
      <Banner/>
      <BlogList posts={posts}/>
      {/* <h1 className='text-white'>Not in preview mode</h1> */}

    </div>
  )
}