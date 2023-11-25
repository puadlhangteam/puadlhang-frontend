import ActionButton from '../../action/ActionButton'
import HText from '../../action/ActionButton'
import { motion } from 'framer-motion'
import { HomeModernIcon } from '@heroicons/react/24/solid'
import { BlogSpecialistDTO, SelectedPageDTO } from '../../types/home'
import Graphic from '../../assets/icons/home/BlogGraphic.svg'

import BlogSpecialist from './BlogSpecialist'

const blogspecialists: Array<BlogSpecialistDTO> = [
  {
    picture: <HomeModernIcon className="h-6 w-6" />,
    username: 'Dr. Bunny',
    text: 'กล้ามเนื้อหัวใจมีเลือดไปเลี้ยงลดลงหรือไม่มีเลย เป็นผลให้การทำงานของกล้ามเนื้อหัวใจผิดปกติ ',
  },
  {
    picture: <HomeModernIcon className="h-6 w-6" />,
    username: 'Dr. Tontan',
    text: 'ภาวะกล้ามเนื้อหัวใจขาดเลือดเฉียบพลันพบได้กับผู้ป่วยที่สูบบุหรี่ไฟฟ้ามาเป็นเวลานาน',
  },
  {
    picture: <HomeModernIcon className="h-6 w-6" />,
    username: 'Dr. Jojosu',
    text: 'ไม่อยากปวดหลัง ต้องอ่านนน !! อาการปวดหลังบอกอะไรบ้าง',
  },
  {
    picture: <HomeModernIcon className="h-6 w-6" />,
    username: 'Dr. Kong',
    text: 'กล้ามเนื้อหัวใจมีเลือดไปเลี้ยงลดลงหรือไม่มีเลย เป็นผลให้การทำงานของกล้ามเนื้อหัวใจผิดปกติ',
  },
  {
    picture: <HomeModernIcon className="h-6 w-6" />,
    username: 'Vvkot',
    text: 'ไม่อยากปวดหลัง ต้องอ่านนน !! อาการปวดหลังบอกอะไรบ้าง',
  },
  {
    picture: <HomeModernIcon className="h-6 w-6" />,
    username: 'Peerachi',
    text: 'กล้ามเนื้อหัวใจมีเลือดไปเลี้ยงลดลงหรือไม่มีเลย เป็นผลให้การทำงานของกล้ามเนื้อหัวใจผิดปกติ',
  },
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
}

type Props = {
  username: string
  picture: JSX.Element
  text: string

  setSelectedPage: (value: SelectedPageDTO) => void
}

const BlogSpecialists = ({ setSelectedPage }: Props) => {
  return (
    <section id="blogspecialists" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPageDTO.BlogSpecialists)}>
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText setSelectedPage={setSelectedPage}>
            อ่านเรื่องน่ารู้เกี่ยวกับกล้ามเนื้อ เพิ่มเติมได้<span className="text-primary-500">ที่นี้</span>
          </HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals
            with ease. We provide true care into each and every member.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {blogspecialists.map((blogspecialists: BlogSpecialistDTO) => (
            <BlogSpecialist
              key={blogspecialists.text}
              picture={blogspecialists.picture}
              username={blogspecialists.username}
              text={blogspecialists.text}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img className="mx-auto" alt="benefits-page-graphic" src={Graphic} />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                ></motion.div>
              </div>
            </div>

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
                <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default BlogSpecialists
