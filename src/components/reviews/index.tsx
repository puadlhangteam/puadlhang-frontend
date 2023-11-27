import { motion } from 'framer-motion'
import useReview from '../../hooks/useReview'
import Review from './Review'
import classes from './Review.module.css'
import { REVIEWS } from '../../data/review'

const Reviews = () => {
  const { reviews, isLoading } = useReview()

  if (isLoading) return <h1>Loading...</h1>

  console.log(reviews)
  return (
    <section id="ourclasses" className="gap-12 md:pb-0 w-full">
      <div className={classes.box}>
        <div className={classes.container}>
          <div className="mx-auto w-3/6 items-center justify-center md:flex md:h-5/6">
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
                <div className={classes.sectionTitle}>
                  <h1>หลายเรื่องสุขภาพน่ารู้ ที่หมออยากบอก</h1>
                </div>

                <div className="whitespace-nowrap">
                  <div className={classes.blogContainer}>
                    {REVIEWS.map((review) => {
                      return <Review key={review.thumbnailUrl} review={review} />
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
