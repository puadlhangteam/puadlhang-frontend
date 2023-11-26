import { motion } from 'framer-motion'
import classes from './Rating.module.css'

const Rating = () => {
  return (
    <section id="rating">
      {/* Rating */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className={classes.container}>
          <div>
            <h1>Join in on something big</h1>
          </div>
          <div className={classes.text}>
            <h1>1K</h1>
            <p>ผู้เข้าชม</p>
          </div>
          <div className={classes.text}>
            <h1>200+</h1>
            <p>สมาชิก</p>
          </div>
          <div className={classes.text}>
            <h1>100</h1>
            <h1>ผู้เชี่ยวชาญ</h1>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
export default Rating
