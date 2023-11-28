import { Link } from 'react-router-dom'
import { IResSolutionsDTO } from '../../types'
interface IContentprops {
  content: IResSolutionsDTO
}
const Minicard = ({ content }: IContentprops) => {
  return (
    <div className="Rectangle4 w-80 h-96 bg-blue-300 bg-opacity-90 rounded-3xl shadow-lg">
      {/* <img className="Image1 w-80 h-56 rounded-tl-3xl rounded-tr-3xl" src={content.pictures[0]} /> */}
      <div className="flex justify-center flex-col  items-center">
        <div className="text-center text-neutral-700 text-xl font-medium font-['Poppins'] tracking-wider  break-normal  pt-2 px-5">
          {content.name}
        </div>
        <span className="text-gray-300 hover:text-yellow-500 text-[25px] ">★★★★★</span>
        <div className="w-32 h-11 flex-col flex justify-center items-center bg-white hover:bg-orange-200 rounded-2xl">
          <Link to={`/solutions/${content.muscle}`}>
            <button className="text-lg text-center text-orange-500 text-opacity-90  font-bold font-['Epilogue'] tracking-wide">
              อ่านต่อ
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Minicard
