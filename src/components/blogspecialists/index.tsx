import BlogSpecialist from './BlogSpecialist'
import { BLOGSPECIAL } from '../../data/blogspecialist'
import { motion } from 'framer-motion'

const BlogSpecialists = () => {
  return (
    <section id="home" className="flex flex-col container mx-auto px-1">
      <div>
        {/* IMAGE AND MAIN HEADER */}

        <div className="mx-auto items-center justify-center md:flex ">
          <motion.div
            className="md:-mt-10"
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
              <div className=" text-orange-500 text-5xl font-normal font-['Kanit'] mt-20 leading-10">
                <h1>หลายเรื่องสุขภาพน่ารู้ ที่หมออยากบอก</h1>
              </div>

              <div className="w-full pt-20 flex justify-between gap-8">
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
