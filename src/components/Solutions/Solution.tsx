import useContentbymuscle from '../../hooks/useContentbymuscle'
import SolutionCard from './SolutionCard'

interface ISolutionProp {
  muscle: string
}

const Solution = ({ muscle }: ISolutionProp) => {
  const { contents } = useContentbymuscle(muscle)
  if (!contents || contents.length === 0) return null
  return (
    contents && (
      <section className="flex flex-col  container mx-auto px-5">
        <div>
          <h1 key={muscle} className="font-kanit text-xl sm:text-3xl text-amber py-5">
            {muscle}
          </h1>
          <div className=" flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
            {contents &&
              contents.map((content) => {
                return (
                  <>
                    <SolutionCard
                      key={content.muscle}
                      content={content}
                      className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
                    />
                  </>
                )
              })}
          </div>
        </div>
      </section>
    )
  )
}

export default Solution
