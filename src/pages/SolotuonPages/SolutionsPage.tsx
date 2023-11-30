import BannerSolution from '../../components/Solutions/SolutionList/BannerSolution'
import SolutionSection from '../../components/Solutions/SolutionList/SolutionSection'
import { Muscle } from '../../components/Utils/Model/Model.type'

function SolutionsPage() {
  const muscles = JSON.parse(localStorage.getItem('selectedBodyPart') || '[]') as Muscle[]
  return (
    <section className="appBg  min-h-screen flex flex-col mx-auto px-5 py-10 gap-8">
      <BannerSolution muscles={muscles} />

      {muscles.map((muscle) => (
        <SolutionSection key={muscle} muscle={muscle} />
      ))}
    </section>
  )
}

export default SolutionsPage
