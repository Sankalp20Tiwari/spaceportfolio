'use client'

import React from 'react'
import { motion } from "motion/react"
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import {useInView} from 'react-intersection-observer'
import Image from 'next/image'

interface Props {
    src: string,
    width: number,
    height: number,
    index: number
}


const SkillDataProvider = ({src, width,height,index}: Props) => {

    const {ref, inView} = useInView({
        triggerOnce: true
    })

    const imageVariants = {
        hidden: {opacity:0},
        visible: {opacity:1}
    }

    const animationDelay = 0.3

  return (
    <motion.div
     ref={ref}
     initial='hidden'
     animate={inView ? 'visible' : 'hidden'}
     variants={imageVariants}
     custom={index}
     transition={{
        delay: animationDelay + index * 0.1,
     }}
    >
        <Image 
            src={src}
            width={width}
            height={height}
            alt='skill image'        
        />
    </motion.div>
  )
}

export default SkillDataProvider
