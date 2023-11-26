import { motion } from 'framer-motion'
import Joynow from '../../assets/home/joynow.svg'

import ActionButton from '../action/ActionButton'

const Content = () => {
  return (
    <section id="content" className="gap-12 md:pb-0">
      <motion.div className="mx-auto w-3/6  md:h-5/6">
        {/* GRAPHICS AND TEXT */}
        <div className="mt-6 items-center justify-between gap-20 md:mt-38 md:flex">
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
              <p className="my-5">
                แหล่งบทความเกี่ยวกับกล้ามเนื้อที่น่ารู้
                ที่จะทำให้คุณสามารถป้องกันความเจ็บป่วยในปัจจุบันไม่ให้เกินขึ้นในอนาคต แต่ถ้าหากคุณต้องการ
                การแก้ไขและท่ากายภาพอย่างตรงจุดเราแนะนำให้คุณ เลือกบริเวณได้ที่นี้
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton location="body">Join Now</ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Content
