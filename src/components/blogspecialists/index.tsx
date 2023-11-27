import BlogSpecialist from './BlogSpecialist'
import classes from './Index.module.css'
import { BLOGSPECIAL } from '../../data/blogspecialist'
import { motion } from 'framer-motion'

const BlogSpecialists = () => {
  return (
    <section id="home" className="gap-12 md:pb-0">
      <div className={classes.box}>
        <div className={classes.container}>
          {/* IMAGE AND MAIN HEADER */}

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

                <div className={classes.blogContainer}>
                  {BLOGSPECIAL.map((specialist) => {
                    return <BlogSpecialist key={specialist.thumbnailUrl} specialist={specialist} />
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default BlogSpecialists
