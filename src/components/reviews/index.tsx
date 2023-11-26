import { motion } from 'framer-motion'
import { SelectedPageDTO } from '../../types/home'
import useReview from '../../hooks/useReview'
import Review from './Review'

const Reviews = () => {
  const { reviews, isLoading } = useReview()

  if (isLoading) return <h1>Loading...</h1>

  console.log(reviews)
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div onViewportEnter={() => SelectedPageDTO.Reviews}>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <p className="py-5">Reviwe</p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <div className="w-[2800px] whitespace-nowrap">
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
