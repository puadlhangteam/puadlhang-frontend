import ABOUTUS from '../../assets/home/AboutUsBG.svg'
import behance from '../../assets/home/behance.svg'
import dribbble from '../../assets/home/dribbble.svg'
import facebook from '../../assets/home/facebook.svg'
import instagram from '../../assets/home/instagram.svg'
import ActionButton from '../action/ActionButton'

const AboutUs = () => {
  return (
    <footer id="aboutus" className="container mx-auto px-5 mb-11">
      <div className="flex flex-row justify-between items-center mb-11">
        <div className="flex flex-col justify-between">
          <div className="flex flex-row justify-between mb-10">
            <div className="w-20 h-20 rounded-full border border-transparent shadow-md bg-gradient-to-br from-orange-300 to-red-600 text-white text-center text-lg font-normal ">
              <ActionButton location={'body'}>^</ActionButton>
            </div>
            <h1 className=" text-orange-500 text-6xl font-normal font-['Kanit']  leading-10 ">About Us</h1>
          </div>

          <div className="flex flex-col justify-between text-2xl font-['Kanit'] ">
            <p>
              พวกเราจัดทำเว็บไซต์ขึ้นเพราะอยากให้คุณสุขภาพดี <br></br> พร้อมทำงานหาเงินต่อไป หวังว่าเราจะช่วยให้คุณ
              <br></br>บรรเทาอาการความปวดกายได้สะดวกขึ้นหากอาการ<br></br>
              ไม่ดีขึ้น เราแนะนำให้คุณหาหมอด่วน
            </p>
            <h1 className="flex flex-col justify-between text-2xl mt-5 font-['Kanit'] ">©Puadlhang</h1>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col justify-between">
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

          <img alt="graphic" src={ABOUTUS} />
        </div>
      </div>
    </footer>
  )
}

export default AboutUs
