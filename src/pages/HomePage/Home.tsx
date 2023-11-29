import { useEffect, useState } from 'react'
import AboutUs from '../../components/aboutUs/AboutUs'
import Concept from '../../components/concept/Concept'
import IntroWeb from '../../components/introWeb/Introweb'
import { SelectedPageDTO } from '../../types/home'

import BlogSpecialists from '../../components/blogspecialists'
import Bodymain from '../../components/body/Bodymain'
import Reviews from '../../components/reviews'

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
    <div className="app ">
      <IntroWeb />
      <Bodymain />
      <BlogSpecialists />
      <Reviews />
      <Concept />
      <AboutUs />
    </div>
  )
}

export default Home
