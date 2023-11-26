import Logofooter from '../../assets/home/Logofooter.svg'
import Graphics from '../../assets/home/BlogGraphic.svg'
import behance from '../../assets/home/behance.svg'
import dribbble from '../../assets/home/dribbble.svg'
import facebook from '../../assets/home/facebook.svg'
import instagram from '../../assets/home/instagram.svg'

const AboutUs = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logofooter} />
          <p className="my-8">
            พวกเราจัดทำเว็บไซต์ขึ้นเพราะอยากเห็นคนไทยสุขภาพดี <br></br> พร้อมทำงานหาเงินต่อไป
            หวังว่าเราจะช่วยให้คุณหาวิธี <br></br>บรรเทาอาการความปวดกายได้สะดวกขึ้นหากอาการไม่ดีขึ้น <br></br>
            เราแนะนำให้คุณหาหมอด่วน
          </p>
          <p>©Puadlhang</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
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

        <div>
          <img alt="graphic" src={Graphics} />
        </div>
      </div>
    </footer>
  )
}

export default AboutUs
