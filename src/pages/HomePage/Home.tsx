import { useEffect, useState } from 'react'
import AboutUs from '../../components/aboutUs/AboutUs'

import IntroWeb from '../../components/introWeb/Introweb'
import { SelectedPageDTO } from '../../types/home'

import BlogSpecialists from '../../components/blogspecialists'
import Reviews from '../../components/reviews'
import Bodymain from '../../components/body/Bodymain'
import Rating from '../../components/rating/Rating'

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
      <Reviews />
      <Rating />
      <AboutUs />
    </div>
  )
}

export default Home
