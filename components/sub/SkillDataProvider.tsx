'use client'

import React from 'react'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
}

const SkillDataProvider = ({ src, width, height, index }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: 0.1 + index * 0.05,
        ease: 'easeOut',
      }}
    >
      <Image 
        src={src}
        width={width}
        height={height}
        alt="skill"
        className="object-contain"
      />
    </motion.div>
  );
};

export default SkillDataProvider;

