import IntroWeb from '../components/Introweb'
import Body from '../components/Body'
import classes from './Home.module.css'
import AboutUs from '../components/AboutUs'
import Reviews from '../components/Reviews'
import BlogSpecialist from '../components/BlogSpecialist'

const Home = () => {
  //   const { isLoading } = usePosts()
  //   if (isLoading) return <h1 style={{ textDecoration: 'none', color: ' #6666dc' }}>Loading...</h1>

  return (
    <div className={classes.container}>
      <div>
        <IntroWeb />
      </div>
      <Body />
      <BlogSpecialist />
      <Reviews />
      <AboutUs />
    </div>
  )
}

export default Home
