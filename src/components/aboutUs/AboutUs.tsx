import Logofooter from '../../assets/home/Logofooter.svg'
import Graphics from '../../assets/home/BlogGraphic.svg'
import behance from '../../assets/home/behance.svg'
import dribbble from '../../assets/home/dribbble.svg'
import facebook from '../../assets/home/facebook.svg'
import instagram from '../../assets/home/instagram.svg'
import classes from './AboutUs.module.css'

const AboutUs = () => {
  return (
    <footer id="aboutus" className={classes.container}>
      <div className={classes.formcontainer}>
        <div className={classes.containertitle}>
          <img alt="logo" src={Logofooter} />
          <div className={classes.description}>
            <p>
              พวกเราจัดทำเว็บไซต์ขึ้นเพราะอยากเห็นคนไทยสุขภาพดี <br></br> พร้อมทำงานหาเงินต่อไป
              หวังว่าเราจะช่วยให้คุณหาวิธี <br></br>บรรเทาอาการความปวดกายได้สะดวกขึ้นหากอาการไม่ดีขึ้น <br></br>
              เราแนะนำให้คุณหาหมอด่วน
            </p>
            <h1>©Puadlhang</h1>
          </div>
        </div>
        <div className={classes.containerso}>
          <div className={classes.containersocial}>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="facebook" />
            </a>

            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="instagram" />
            </a>

            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <img src={dribbble} alt="dribbble" />
            </a>

            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <img src={behance} alt="behance" />
            </a>
          </div>

          <img alt="graphic" src={Graphics} />
        </div>
      </div>
    </footer>
  )
}

export default AboutUs
