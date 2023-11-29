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
      <section id={muscle + 'section'} className="flex flex-col w-full  mx-auto px-5">
        <div>
          <h1 key={muscle} className="font-kanit text-xl sm:text-3xl text-amber py-5">
            {muscle}
          </h1>
          {contents && (
            <div className="grid grid-cols-3">
              <div className="flex justify-center items-center w-full">
                <Model data={[muscle as Muscle]} Front={Front} Back={Back} />
              </div>
              <div className=" grid grid-cols-2 md:gap-x-5 gap-y-5 pb-10 col-span-2">
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
