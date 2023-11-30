import ReactPlayer from 'react-player/youtube'
import { IResSolutionsDTO } from '../../../types'

interface IContentprops {
  content: IResSolutionsDTO
}

function SolutionDetail({ content }: IContentprops) {
  return (
    <article className=" py-16  ">
      <div className="grid md:grid-cols-5 gap-20 w-full font-kanit font-light shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] bg-taily rounded-lg p-16">
        <div className={`md:col-span-2 rounded-md grid ${content.pictures.length > 1 ? 'grid-cols-2' : ''} gap-2`}>
          {content.pictures.map((pic: string, idx: number) => (
            <div key={idx} className="relative">
              <img className="rounded-3xl" src={pic} />
              <div className="rounded-full bg-white bg-opacity-50 absolute top-2 left-2 h-6 w-6 flex justify-center items-center">
                {idx + 1}.
              </div>
            </div>
          ))}
        </div>
        <div className="md:col-span-3 mt-7 text-lg mb-5">
          <h1 className="text-3xl">{content.name}</h1>
          <ul className="py-3 leading-7">
            <li className="flex flex-row gap-5">
              <p className="font-bold">ประเภท</p>
              <span>:</span>
              <p>{content.type}</p>
            </li>
            <li className="flex flex-row gap-5">
              <p className="font-bold ">กล้ามเนื้อ</p>
              <span>:</span>
              <p>{content.muscle}</p>
            </li>
            {content.items && content.items.length !== 0 && (
              <li className="flex flex-row gap-5">
                <p className="font-bold">อุปกรณ์</p>
                <span>:</span>
                {content.items.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </li>
            )}
            <li className="flex flex-row gap-5 mb-5">
              <p className="font-bold">ระดับ</p>
              <span>:</span>
              <p>{content.level}</p>
            </li>
          </ul>
          <h3 className="text-xl mb-2">วิธีปฏิบัติ</h3>
          <ul className=" list-decimal px-8 leading-10">
            {content.solutions &&
              content.solutions.map((value, idx: number) => {
                return <li key={idx}>{value}</li>
              })}
          </ul>
        </div>
        {content.videoUrl && <ReactPlayer url={content.videoUrl} />}
      </div>
    </article>
  )
}

export default SolutionDetail
