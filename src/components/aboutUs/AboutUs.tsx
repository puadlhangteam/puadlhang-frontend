import aboutusBg from '../../assets/icons/home/AboutUsBG.svg'
import behance from '../../assets/icons/home/behance.svg'
import dribbble from '../../assets/icons/home/dribbble.svg'
import facebook from '../../assets/icons/home/facebook.svg'
import instagram from '../../assets/icons/home/instagram.svg'
import logoabout from '../../assets/icons/home/logoAboutUs.svg'
import classes from './AboutUs.module.css'

const AboutUs = () => {
  return (
    <section className={classes.container}>
      <div className={classes.formcontainer}>
        <div>
          <div>
            <div className={classes.containertitle}>
              <p className={classes.title}>About us</p>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <img src={logoabout} alt="behance" />
              </a>
            </div>

            <p className={classes.description}>
              พวกเราจัดทำเว็บไซต์ขึ้นเพราะอยากเห็นคนไทยสุขภาพดี <br></br> พร้อมทำงานหาเงินต่อไป
              หวังว่าเราจะช่วยให้คุณหาวิธี <br></br>บรรเทาอาการความปวดกายได้สะดวกขึ้นหากอาการไม่ดีขึ้น <br></br>
              เราแนะนำให้คุณหาหมอด่วน
            </p>
          </div>
          <div>
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
          </div>
        </div>
        <div>
          <img src={aboutusBg} alt="aboutusBg" />
        </div>
      </div>
    </section>
  )
}

export default AboutUs
