import { motion } from 'framer-motion'
import Review from './Review'
import { REVIEWS } from '../../../data/review'

const Reviews = () => {
  return (
    <section id="ourclasses">
      <div className="mx-auto flex flex-col container items-center w-4/5 mt-20 mb-10">
        <div className="mx-auto items-center justify-center md:flex ">
          <motion.div
            className="md:-mt-30 "
            // initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className=" text-blue-400 md:text-5xl text-3xl font-normal font-['Kanit'] mt-20  grid  pb-20 col-span-2">
              <h1>เรื่องเล่าของผู้ใช้งานจริง</h1>
            </div>
            <div className="grid md:grid-cols-4  md:gap-x-10 gap-y-5 pb-10 col-span-2">
              {REVIEWS.map((review) => {
                return <Review key={review.thumbnailUrl} review={review} />
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
