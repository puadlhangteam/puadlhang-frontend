import BannerSolution from '../components/Solutions/Banner/BannerSolution'
import Solution from '../components/Solutions/Solution'

const muscles: string[] = [
  'trapezius',
  'upper-back',
  'lower-back',
  'chest',
  'biceps',
  'triceps',
  'forearm',
  'back-deltoids',
  'front-deltoids',
  'abs',
  'hand',
  'obliques',
  'adductor',
  'abductors',
  'hamstring',
  'quadriceps',
  'calves',
  'gluteal',
  'head',
  'neck',
  'knees',
  'kneesback',
  'left-soleus',
  'right-soleus',
  'handback',
]

interface IMuscleprops {
  muscles: string[]
  muscle: string
}

function SolutionPage() {
  return (
    <section className="flex flex-col container mx-auto px-5 py-10">
      <BannerSolution />

      {muscles.map((muscle) => (
        <Solution key={muscle} muscle={muscle} />
      ))}
    </section>
  )
}

export default SolutionPage
