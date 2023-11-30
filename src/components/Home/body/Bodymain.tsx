import { motion } from 'framer-motion'
import Body from '../../Utils/Model/body'

const Bodymain = () => {
  return (
    <section id="body" className=" container mx-auto py-10 mb-32 mt-32 items-center ">
      {/*HEADER */}
      <motion.div className="mx-auto items-center justify-center  md:h-5/6 mt-20 mb-5">
        {/* MAIN BODY */}
        <div className="mt-20 md:basis-5/6">
          {/* BODY */}
          <motion.div
            className="md:-mt-20"
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
              <Body />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Bodymain
