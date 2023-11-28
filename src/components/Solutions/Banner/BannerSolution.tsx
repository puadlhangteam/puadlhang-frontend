import { FaArrowRight } from 'react-icons/fa'
import { Muscle } from '../../body/componentBody/Model/Model.type'
interface IBannerSolutionProps {
  muscles: Muscle[]
}
function BannerSolution({ muscles }: IBannerSolutionProps) {
  return (
    <section className="flex flex-col container mx-auto px-5 pb-10">
      <div className="text-3xl sm:text-5xl">
        <h1 className="font-kanit  text-amber">Exercise that Work!</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-x-5">
        {muscles.map((muscle) => (
          <a
            key={muscle + 'Banner'}
            className="flex items-center gap-x-2 mt-5 font-bold text-amber border-2 border-amber px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]"
            href={`#${muscle}section`}
          >
            <span>{muscle}</span>
            <FaArrowRight className="w-3 h-3" />
          </a>
        ))}
      </div>
    </section>
  )
}

export default BannerSolution
