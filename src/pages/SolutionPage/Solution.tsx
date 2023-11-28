import useContentbymuscle from '../../hooks/useContentbymuscle'
import Minicard from '../../components/content/Minicard'

const Solution = (muscle: string) => {
  const { contents } = useContentbymuscle(muscle)

  return (
    <div className="w-full">
      <div className="container mx-auto px-5 flex justify-between py-4 items-center gap-3">
        <div className="flex-col justify-between gap-1">
          <label className=" text-orange-500 text-5xl font-semibold font-['Poppins'] leading-10">
            Exercises That Work!
          </label>
          <br />
          <br />
          {contents &&
            contents.map((content) => (
              <button key={content.muscle} className="Buttonframe w-60 h-12 bg-orange-400 bg-opacity-90 rounded-3xl">
                {content.muscle}
              </button>
            ))}
        </div>
        <img className="Logo2 w-56 h-60" src="https://via.placeholder.com/231x233" />
      </div>
      <div className="flex   justify-start w-96 h-20 text-orange-500 text-5xl font-semibold font-['Kanit'] leading-10">
        {contents &&
          contents.map((content) => (
            <div
              key={content.muscle}
              className="flex   justify-start w-96 h-20 text-orange-500 text-5xl font-semibold font-['Kanit'] leading-10"
            >
              {content.name}
            </div>
          ))}
      </div>
      {contents && contents.map((content) => <Minicard key={content.muscle} content={content} />)}
    </div>
  )
}

export default Solution
