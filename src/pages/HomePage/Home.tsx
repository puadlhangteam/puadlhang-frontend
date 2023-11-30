import { useEffect, useState } from 'react'
import AboutUs from '../../components/Home/aboutUs/AboutUs'
import IntroWeb from '../../components/Home/introWeb/Introweb'
import { SelectedPageDTO } from '../../types/home'
import BlogSpecialists from '../../components/Home/blogspecialists'
import Bodymain from '../../components/Home/body/Bodymain'
import Reviews from '../../components/Home/reviews'
import classes from './Home.module.css'

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
    <div className="app mx-auto">
      <div className={classes.gradientintro}>
        <IntroWeb />
      </div>
      <Bodymain />
      <BlogSpecialists />

      <Reviews />

      <div className={classes.gradientabout}>
        <AboutUs />
      </div>
    </div>
  )
}

export default Home
