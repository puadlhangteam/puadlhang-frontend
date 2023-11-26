import { motion } from 'framer-motion'
import { BlogSpecialistDTO } from '../../types/home'
import Graphic from '../../assets/home/BlogGraphic.svg'

import BlogSpecialist from './BlogSpecialist'
import ActionButton from '../action/ActionButton'

const blogspecialists: Array<BlogSpecialistDTO> = [
  {
    thumbnailUrl:
      'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    username: 'Dr. Bunny',
    text: 'กล้ามเนื้อหัวใจมีเลือดไปเลี้ยงลดลงหรือไม่มีเลย เป็นผลให้การทำงานของกล้ามเนื้อหัวใจผิดปกติ ',
  },
  {
    thumbnailUrl:
      'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    username: 'Dr. Tontan',
    text: 'ภาวะกล้ามเนื้อหัวใจขาดเลือดเฉียบพลันพบได้กับผู้ป่วยที่สูบบุหรี่ไฟฟ้ามาเป็นเวลานาน',
  },
  {
    thumbnailUrl:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    username: 'Dr. Jojosu',
    text: 'ไม่อยากปวดหลัง ต้องอ่านนน !! อาการปวดหลังบอกอะไรบ้าง หมออยากให้คุณรู้',
  },
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
}

const BlogSpecialists = () => {
  return (
    <section id="blogspecialists">
      <motion.div className="mx-auto w-3/6  md:h-5/6">
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        ></motion.div>

        {/* BLOG */}
        <div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
          >
            {blogspecialists.map((blogspecialists: BlogSpecialistDTO) => (
              <BlogSpecialist
                key={blogspecialists.text}
                thumbnailUrl={blogspecialists.thumbnailUrl}
                username={blogspecialists.username}
                text={blogspecialists.text}
              />
            ))}
          </motion.div>
        </div>

        {/* GRAPHICS AND TEXT */}
        <div className="mt-6 items-center justify-between gap-20 md:mt-28 md:flex">
          <img className="mx-auto" alt="benefits-page-graphic" src={Graphic} />

          <div>
            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                แหล่งบทความเกี่ยวกับกล้ามเนื้อที่น่ารู้
                ที่จะทำให้คุณสามารถป้องกันความเจ็บป่วยในปัจจุบันไม่ให้เกินขึ้นในอนาคต แต่ถ้าหากคุณต้องการ
                การแก้ไขและท่ากายภาพอย่างตรงจุดเราแนะนำให้คุณ เลือกบริเวณได้ที่นี้
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton location="body">Join Now</ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default BlogSpecialists
