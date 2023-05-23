import React from "react";
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import Image from "next/image";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <Image
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center md:items-start mx-5">
      <motion.div variants={textVariant()}>
        <p className={'sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'}>Introduction</p>
        <h2 className={'dark:text-white text-black font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'}>About.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        UFV&apos;s Computing Student Association exists to represent computing students to UFV faculty and Staff. We provide a space for students to hang out, make friends, and inquire about tutoring or help with projects. We manage the Student Computing Centre (SCC) in room D224 in D-building at the Abbotsford campus. If you have an event you want to organize, or a project you would like to run, talk with us and we’ll work with you to make it happen. The goal CSA is to fully provide a fun and enjoyable environment for students on campus, to help build a community of like-minded students from all disciplines in the CIS world.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <div key={service}>
          <ServiceCard key={service.title} index={index} {...service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");