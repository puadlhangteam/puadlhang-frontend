import BannerSolution from '../components/Solutions/Banner/BannerSolution'
import Solution from '../components/Solutions/Solution'
import { Muscle } from '../components/body/componentBody/Model/Model.type'

function SolutionPage() {
  const muscles = JSON.parse(localStorage.getItem('selectedBodyPart') || '[]') as Muscle[]
  return (
    <section className="flex flex-col container mx-auto px-5 py-10">
      <BannerSolution muscles={muscles} />

      {muscles.map((muscle) => (
        <Solution key={muscle} muscle={muscle} />
      ))}
    </section>
  )
}

export default SolutionPage
