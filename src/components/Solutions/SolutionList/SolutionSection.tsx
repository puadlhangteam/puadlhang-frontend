import useContentbymuscle from '../../../hooks/useContentbymuscle'
import Model from '../../Utils/Model/Model'
import { Muscle } from '../../Utils/Model/Model.type'
import { anteriorData, posteriorData } from '../../Utils/Model/svg.data'
import SolutionCard from './SolutionCard'

interface ISolutionProp {
  muscle: string
}

const SolutionSection = ({ muscle }: ISolutionProp) => {
  const { contents } = useContentbymuscle(muscle)
  if (!contents || contents.length === 0) return null
  const Front = anteriorData.some((v) => v.muscle === muscle)
  const Back = posteriorData.some((v) => v.muscle === muscle) && !Front
  return (
    contents && (
      <section id={muscle + 'section'} className="flex container  flex-col w-full  mx-auto px-5">
        <div>
          <h1 key={muscle} className="font-kanit text-xl sm:text-3xl text-amber py-5">
            {muscle}
          </h1>
          {contents && (
            <div className="grid grid-cols-3 gap-x-10">
              <div className="  justify-center items-center w-full">
                <div className="sticky top-32 right-0 left-0 bottom-28">
                  <Model data={[muscle as Muscle]} Front={Front} Back={Back} />
                </div>
              </div>
              <div className=" grid md:grid-cols-2  md:gap-x-10 gap-y-5 pb-10 col-span-2">
                {contents.map((content, idx) => {
                  return <SolutionCard key={content.muscle + 'card' + idx} content={content} className="w-full" />
                })}
              </div>
            </div>
          )}
        </div>
      </section>
    )
  )
}

export default SolutionSection
