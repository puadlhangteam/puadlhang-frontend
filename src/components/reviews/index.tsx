import { motion } from 'framer-motion'

import Review from './Review'
import classes from './Review.module.css'
import { REVIEWS } from '../../data/review'

const Reviews = () => {
  return (
    <section id="ourclasses" className="gap-12 md:pb-0">
      <div className="mx-auto items-center md:h-5/6 bg-gradient-to-r from-cyan-400 to-blue-500 ...">
        <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
          <motion.div
            className="md:-mt-30 m-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className={classes.sectionTitle}>
              <h1>เรื่องเล่าของผู้ใช้งานจริง</h1>
            </div>
            <div className={classes.blogContainer}>
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
