import { useEffect, useState } from 'react'
import AboutUs from '../../components/aboutUs/AboutUs'

import Body from '../../components/body/Body'
import IntroWeb from '../../components/introWeb/Introweb'
import { SelectedPageDTO } from '../../types/home'
import OurClasses from '../../components/ourClasses'
import BlogSpecialists from '../../components/blogspecialists'

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
      <IntroWeb />
      <Body />
      <BlogSpecialists />
      <OurClasses />

      <AboutUs />
    </div>
  )
}

export default Home
