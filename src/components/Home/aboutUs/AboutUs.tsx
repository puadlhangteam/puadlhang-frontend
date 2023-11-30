import ABOUTUS from '../../../assets/home/AboutUsBG.svg'

import Github from '../../../assets/icons/GitHub.svg'

const AboutUs = () => {
  return (
    <footer id="aboutus" className="container mx-auto px-5  w-4/5">
      <div className="flex flex-row  justify-between items-center pb-20 pt-40">
        <div className="flex flex-col justify-between">
          <div className="flex flex-row justify-between mb-10">
            <h1 className=" text-orange-500 text-6xl font-normal font-['Kanit']  leading-10 ">About Us</h1>
          </div>

          <div className="flex flex-col justify-between md:text-2xl text-lg font-['Kanit'] font-normal  ">
            <p>
              พวกเราอยากเห็นให้คุณสุขภาพดี <br></br> พร้อมทำงานหาเงินต่อไป หวังว่าเราจะช่วยให้คุณ
              <br></br>บรรเทาอาการความปวดกายได้สะดวกขึ้นหากอาการ<br></br>
              ไม่ดีขึ้น เราแนะนำให้คุณหาหมอ
            </p>

            <aside>
              <a
                href="https://github.com/puadlhangteam"
                className="flex gap-2 pt-10 "
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Github} alt="github" />
                <p className="flex flex-col text-2xl mt-5 font-['Kanit'] ">©Puadlhang team</p>
              </a>
            </aside>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <img alt="graphic" src={ABOUTUS} />
        </div>
      </div>
    </footer>
  )
}

export default AboutUs
