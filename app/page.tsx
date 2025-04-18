import AboutMe from '@/components/main/AboutMe'
import Hero from '@/components/main/Hero'
import Projects from '@/components/main/Projects'
import Skills from '@/components/main/Skills'
import Footer from '@/components/main/Footer'

export default function Home() {
  return (
    <main className='h-full w-full '>
      <div className='flex flex-col gap-20'>
          <Hero />
          <AboutMe />
          <Skills />
          <Projects />
          <Footer />
      </div>
    </main>
  )
}
