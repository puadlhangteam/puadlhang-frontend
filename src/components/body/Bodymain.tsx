import classes from './Body.module.css'
import { motion } from 'framer-motion'
import Body from './componentBody/Model/body'
import { SelectedPageDTO } from '../../types/home'

const Bodymain = () => {
  return (
    <section id="body" className="gap-16 bg-gray-20 py-10 md:h-[80dvh] md:pb-10">
      {/*HEADER */}
      <motion.div className="mx-auto w-3/6 items-center md:flex md:h-5/6" onViewportEnter={() => SelectedPageDTO.Body}>
        {/* MAIN BODY */}
        <div className="z-10 mt-20 md:basis-5/6">
          {/* BODY */}
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
            <div>
              <p className="text-lg mt-40 kanit">เลือกบริเวณที่คุณปวด แค่คลิ๊ก ชีวิตก็เปลี่ยน</p>

              <div>
                <Body />
              </div>
            </div>
          </motion.div>

          {/*BUTTON */}

          <div>
            <button className={classes.buttonforCreated}>ยืนยัน</button>

            <button className={classes.buttonforskip}>ไม่ทราบ</button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Bodymain
