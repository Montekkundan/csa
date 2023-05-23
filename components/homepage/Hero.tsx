
import { motion } from "framer-motion";
import Link from "next/link";
import LargeHeading from "../ui/LargeHeading";
import Paragraph from "../ui/Paragraph";



const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className='absolute inset-0 top-[120px]  max-w-7xl mx-auto flex flex-col items-center gap-5 '
      >
        
        <div>
        <LargeHeading
            size='lg'
            className='three-d text-black dark:text-light-gold'>
            UFV CSA
          </LargeHeading>
          </div>

          <div>
          <Paragraph className='max-w-xl lg:text-left'>
          UFV’s Computing Student Association exists to represent computing students to UFV faculty and Staff. We provide a space for students to hang out, make friends, and inquire about tutoring or help with projects. We manage the Student Computing Centre (SCC) in room D224 in D-building at the Abbotsford campus. If you have an event you want to organize, or a project you would like to run, talk with us and we’ll work with you to make it happen.
          </Paragraph>
          </div>
      </div>

      


      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <Link href='#Overview'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;