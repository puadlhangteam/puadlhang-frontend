import { motion } from 'framer-motion'

const Rating = () => {
  return (
    <section id="rating" className="mx-auto min-h-full w-5/6 py-20">
      {/* Rating */}
      <motion.div
        className="md:my-5 md:w-3/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="flex justify-between items-center h-400 bg-rgba-orange-300 px-20 text-white text-3xl">
          <div>
            <h1>Join in on something big</h1>
          </div>
          <div>
            <h1>1K</h1>
            <p>ผู้เข้าชม</p>
          </div>
          <div>
            <h1>200+</h1>
            <p>สมาชิก</p>
          </div>
          <div>
            <h1>100</h1>
            <h1>ผู้เชี่ยวชาญ</h1>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
export default Rating
