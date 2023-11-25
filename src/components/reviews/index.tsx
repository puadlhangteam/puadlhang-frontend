import { motion } from 'framer-motion'
import { SelectedPageDTO } from '../../types/home'
import Content from '../components/community/content/Content'
import classes from '../pages/Community.module.css'
import useReview from '../../hooks/useReview'

const OurClasses = () => {
  const { contents, isLoading } = useReview()

  if (isLoading) return <h1>Loading...</h1>

  console.log(contents)
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div onViewportEnter={() => SelectedPageDTO.AboutUs}>
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
          <div className={classes.containerIntro}>
            <p className={classes.fontmian}>Reviwe</p>
          </div>
        </motion.div>
        <div className={classes.containerContent}>
          <div className={classes.cardContent}>
            {contents &&
              contents.data.map((content) => {
                return <Content key={content.id} content={content} />
              })}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default OurClasses
