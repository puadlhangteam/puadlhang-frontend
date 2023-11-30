import { motion } from 'framer-motion'
import BlogSpecialist from './BlogSpecialist'
import { BLOGSPECIAL } from '../../../data/blogspecialist'

const BlogSpecialists = () => {
  return (
    <section id="home" className=" mx-auto px-1 ">
      <div>
        {/* IMAGE AND MAIN HEADER */}

        <div className="mx-auto items-center justify-center md:flex container w-4/5  pt-10 ">
          <motion.div
            className="md:-mt-10"
            // initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div>
              <div className=" text-orange-500 md:text-5xl text-3xl font-normal font-['Kanit'] mt-20  grid  pb-20 col-span-2">
                <h1>หลายเรื่องสุขภาพน่ารู้ ที่หมออยากบอก</h1>
              </div>

              <div className=" grid md:grid-cols-4 md:gap-x-10 gap-y-5 pb-10 col-span-2">
                {BLOGSPECIAL.map((specialist) => {
                  return <BlogSpecialist key={specialist.thumbnailUrl} specialist={specialist} />
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
export default BlogSpecialists
