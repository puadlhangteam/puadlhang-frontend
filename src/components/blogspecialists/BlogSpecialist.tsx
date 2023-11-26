import { motion } from 'framer-motion'

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
}

type Props = {
  username: string
  thumbnailUrl: string
  text: string
}

const BlogSpecialist = ({ thumbnailUrl, username, text }: Props) => {
  return (
    <motion.div variants={childVariant} className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center">
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">{thumbnailUrl}</div>
      </div>

      <h4 className="font-bold">{text}</h4>
      <p className="my-3">{username}</p>
    </motion.div>
  )
}

export default BlogSpecialist
