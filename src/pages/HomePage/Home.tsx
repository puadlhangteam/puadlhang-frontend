import { useEffect, useState } from 'react'
import AboutUs from '../../components/Home/aboutUs/AboutUs'
import Concept from '../../components/Home/concept/Concept'
import IntroWeb from '../../components/Home/introWeb/Introweb'
import { SelectedPageDTO } from '../../types/home'

import BlogSpecialists from '../../components/Home/blogspecialists'
import Bodymain from '../../components/Home/body/Bodymain'
import Rating from '../../components/Home/rating/Rating'

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
      <Bodymain />
      <BlogSpecialists />
      <Rating />
      {/* <Reviews /> */}
      <Concept />
      <AboutUs />
    </div>
  )
}

export default Home
