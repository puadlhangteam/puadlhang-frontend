import { useEffect, useState } from 'react'
import { SelectedPageDTO } from '../types/home'
import IntroWeb from '../components/Introweb'
import Body from '../components/Body'
import AboutUs from '../components/AboutUs'
import BlogSpecialists from '../components/blogspecialists'
import OurClasses from '../components/ourClasses'

function Home() {
  const [, setSelectedPage] = useState<SelectedPageDTO>(SelectedPageDTO.IntroWeb)
  const [, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPageDTO.IntroWeb)
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app bg-gray-20">
      <IntroWeb setSelectedPage={setSelectedPage} />
      <Body />
      <BlogSpecialists setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />

      <AboutUs />
    </div>
  )
}

export default Home
