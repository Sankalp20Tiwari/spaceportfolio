'use client'

import { Backend_skill, Frontend_skill, Full_stack, Other_skill } from '@/constants'
import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillText from '../sub/SkillText'

const Skills = () => {
  const skillSections = [
    { title: 'Frontend', data: Frontend_skill },
    { title: 'Backend', data: Backend_skill },
    { title: 'Full Stack', data: Full_stack },
    { title: 'Other Skills', data: Other_skill }
  ];

  return (
    <section 
      id='skills'
      className='flex flex-col items-center justify-center gap-6 relative overflow-hidden pt-20 px-4 sm:px-10'
      style={{ transform: 'scale(0.95)' }}
    >
      <SkillText />

      {skillSections.map((section, secIndex) => (
        <div key={secIndex} className='flex flex-wrap justify-center gap-5 mt-6 z-10'>
          {section.data.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
      ))}

      {/* Background Video */}
      <div className='absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none'>
        <video 
          className='w-full h-[800px] object-cover'
          preload='false'
          playsInline
          loop
          muted
          autoPlay
          src='/cards-video.webm'
        />
      </div>
    </section>
  )
}

export default Skills;

