import { motion } from 'framer-motion'
import Humanhome from '../../../assets/home/Humanhome.svg'
import Texthome from '../../../assets/home/Texthome.svg'
import ActionButton from '../../action/ActionButton'
import classes from './Introweb.module.css'

const IntroWeb = () => {
  return (
    <section id="home" className=" mx-auto px-5 mb-32  mt-20 items-center ">
      {/* IMAGE AND MAIN HEADER */}

      <motion.div className="mx-auto items-center justify-center md:flex md:h-5/6 mt-20 mb-5">
        {/* MAIN HEADER */}
        <div className="z-10 mt-20 md:basis-5/6">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext mt-20">
                <img alt="home-text" src={Texthome} />
              </div>
            </div>
            <p className="text-lg mt-60 kanit mb-10">
              อาการของคุณเป็นยังไงบอกเราได้เลย ด้วยความห่วงใยจากคนที่เคยเป็นเหมือนกันกับคุณ
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="flex items-center gap-8 animate-pulse"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className={classes.buttonforCreated}>
              <ActionButton location={'body'}>เริ่ม</ActionButton>
            </div>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div
          className="flex basis-5/6 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end"
        >
          <img alt="home-humanhome" src={Humanhome} />
        </div>
      </motion.div>
    </section>
  )
}

export default IntroWeb
