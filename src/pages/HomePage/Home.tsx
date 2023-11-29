import { useEffect, useState } from 'react'
import AboutUs from '../../components/Home/aboutUs/AboutUs'
import Concept from '../../components/Home/concept/Concept'
import IntroWeb from '../../components/Home/introWeb/Introweb'
import { SelectedPageDTO } from '../../types/home'
import BlogSpecialists from '../../components/Home/blogspecialists'
import Bodymain from '../../components/Home/body/Bodymain'
import Reviews from '../../components/Home/reviews'

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
    <div className="app">
      <div>
        <IntroWeb />
      </div>
      <Bodymain />
      <div>
        <BlogSpecialists />
      </div>
      <Reviews />
      <Concept />
      <AboutUs />
    </div>
  )
}

export default Home
