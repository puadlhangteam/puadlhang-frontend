import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPageDTO } from '../../types/home'

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
}

type Props = {
  username: string
  picture: JSX.Element
  text: string

  setSelectedPage: (value: SelectedPageDTO) => void
}

const BlogSpecialist = ({ picture, username, text, setSelectedPage }: Props) => {
  return (
    <motion.div variants={childVariant} className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center">
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">{picture}</div>
      </div>

      <h4 className="font-bold">{text}</h4>
      <p className="my-3">{username}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPageDTO.AboutUs)}
        href={`#${SelectedPageDTO.AboutUs}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  )
}

export default BlogSpecialist
