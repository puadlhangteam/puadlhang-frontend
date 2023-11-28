import BannerSolution from "../components/Solutions/Banner/BannerSolution"
import Solution from "../components/Solutions/Solution"

function SolutionPage() {

  return (
    <section className="flex flex-col container mx-auto px-5 py-10">
    <BannerSolution  />
    <Solution />
    </section>
  )
}

export default SolutionPage