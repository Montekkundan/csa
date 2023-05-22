import urlFor from "@/lib/urlFor"
import Image from "next/image"
import Link from "next/link"

export const RichTextComponents = {
    types: {
        image: ({value} : any) => {
            return (
                <div className="relative w-full h-96 m-10 mx-auto">
                    <Image 
                     className="object-contain"
                     src={urlFor(value).url()}
                    alt="Blog Post image"
                    fill
                    />
                </div>
            )
        }
      },
      lists: {
        bullets: ({children}: any) => (
            <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
        ),
        number: ({children}: any) => (
            <ol className="mt-lg lsit-decimal">{children}</ol>
        ),
      },
      block : {
        h1: ({children}: any) => (
            <ol className="text-5xl py-10 font-bold">{children}</ol>
        ),
        h2: ({children}: any) => (
            <ol className="text-4xl py-10 font-bold">{children}</ol>
        ),
        h3: ({children}: any) => (
            <ol className="text-3xl py-10 font-bold">{children}</ol>
        ),
        h4: ({children}: any) => (
            <ol className="text-2xl py-10 font-bold">{children}</ol>
        ),

        blockquote: ({children}: any) => (
            <blockquote className="border-l-[#F7AB0A] border-l-4 pl-5 py5 my-5">{children}</blockquote>
        ),
      },
      marks: {
        link: ({children, value} :any) => {
          const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
          return (
            <Link href={value.href} rel={rel} className="underline decorate-[#F7AB0A] hover:decoration-black">
            {children}
            </Link>
          )
        },
      },
}