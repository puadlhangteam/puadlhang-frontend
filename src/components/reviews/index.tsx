import { motion } from 'framer-motion'
import useReview from '../../hooks/useReview'
import Review from './Review'
import classes from './Review.module.css'

const Reviews = () => {
  const { reviews, isLoading } = useReview()

  if (isLoading) return <h1>Loading...</h1>

  console.log(reviews)
  return (
    <section id="ourclasses" className={classes.container}>
      <motion.div className="mx-auto items-center justify-center md:flex md:h-5/6">
        <motion.div
          className="mx-auto md:h-5/6"
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
            <p className="py-5">Reviwe</p>
          </div>
        </motion.div>
        <div
          className="flex basis-5/6 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden"
        >
          <div className="whitespace-nowrap">
            {reviews &&
              reviews.data.map((review) => {
                return <Review key={review.uid} review={review} />
              })}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Reviews
