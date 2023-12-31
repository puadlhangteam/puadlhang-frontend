import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Joynow from '../../../assets/home/Joynow.svg'
import classes from './Concept.module.css'

const Concept = () => {
  return (
    <section id="content" className="container mx-auto px-5 mb-11 w-4/5">
      <motion.div
        className="mx-auto md:h-5/6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        {/* GRAPHICS AND TEXT */}
        <div className="mt-6 items-center justify-between gap-20 md:mt-38 pb-10 pt-20 md:flex">
          <img className="mx-auto" alt="benefits-page-graphic" src={Joynow} />

          <div>
            {/* DESCRIPT */}
            <motion.div
              className="md:-mt-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-10" style={{ fontSize: '24px' }}>
                แหล่งบทความเกี่ยวกับกล้ามเนื้อที่น่ารู้
                ที่จะทำให้คุณสามารถป้องกันความเจ็บป่วยในปัจจุบันไม่ให้เกินขึ้นในอนาคต แต่ถ้าหากคุณต้องการ
                การแก้ไขและท่ากายภาพอย่างตรงจุดเราแนะนำให้คุณ เลือกบริเวณได้ที่นี้
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className=" mt-16 ">
              <Link to="/login" className={classes.buttonforCreated}>
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Concept
