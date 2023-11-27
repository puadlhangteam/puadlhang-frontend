import classes from './Body.module.css'
import { motion } from 'framer-motion'
import Body from './componentBody/Model/body'

const Bodymain = () => {
  return (
    <section id="body" className={classes.container}>
      {/*HEADER */}
      <motion.div className="mx-auto items-center justify-center md:flex md:h-5/6 w-full">
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
              <p className={classes.sectionTitle}>เลือกบริเวณที่คุณปวด แค่คลิ๊ก ชีวิตก็เปลี่ยน</p>

              <div>
                <Body />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Bodymain
