import Image from 'next/image'
import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'

function Banner() {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-5 md:space-x-4 justify-between font-bold px-10 py-5 mb-10'>
        <div>
        <LargeHeading
            size='default'
            className='three-d text-black dark:text-light-gold'>
            CSA Events
          </LargeHeading>
          <LargeHeading
            size='sm'
            className='three-d text-black dark:text-light-gold'>
            Welcome to the <span className='underline decoration-4 decoration-[#F7AB0A] dark:decoration-[#FFF]'>CSA community</span> updates
          </LargeHeading>
        </div>
        <div>
        <Paragraph className='text-gray-400 mt-5 md:mt-2'>
            Meeting briefs | upcoming events | upcoming projects | etc.
        </Paragraph>
        </div>
    </div>
    // <div className='container pt-32 max-w-7xl w-full mx-auto h-full'>
    //     <div className='h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start'>
    //       <LargeHeading
    //         size='lg'
    //         className='three-d text-black dark:text-light-gold'>
    //         Events
    //       </LargeHeading>

    //       <Paragraph className='max-w-xl lg:text-left'>
    //         All events shown here.
    //       </Paragraph>
    //     </div>
    //   </div>
  )
}

export default Banner