import { motion } from 'framer-motion'
import Humanhome from '../../assets/home/Humanhome.svg'
import Texthome from '../../assets/home/Texthome.svg'
import { SelectedPageDTO } from '../../types/home'
import ActionButton from '../action/ActionButton'

const IntroWeb = () => {
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-[90dvh] md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-3/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => SelectedPageDTO.IntroWeb}
      >
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
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="home-text" src={Texthome} />
              </div>
            </div>

            <p className="text-lg mt-40 kanit">
              อาการของคุณเป็นยังไงบอกเราได้เลย ด้วยความห่วงใยจากคนที่เคยเป็นเหมือนกับคุณ
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-10 flex items-center gap-8 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton location={'body'}>START</ActionButton>
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
