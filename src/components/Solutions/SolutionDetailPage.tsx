import { IResSolutionsDTO } from '../../types'

interface IContentprops {
  content: IResSolutionsDTO
}

function SolutionDetailPage({ content }: IContentprops) {
  return (
    <article className="py-16">
      <div className="flex w-full font-kanit font-light shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] bg-taily rounded-lg p-16">
        <div className="w-2/5 rounded-md">
          {content.pictures.map((pic: string, idx: number) => (
            <img
              key={idx}
              className="Image11 w-[508px] h-[720px] mt-[54px] ml-[60px] mr-[89px] rounded-3xl"
              src={pic}
            />
          ))}
        </div>
        <div className="w-3/5 pl-28">
          <h1 className="text-3xl">{content.name}</h1>
          <ul className="py-3 leading-7">
            <li className="flex flex-row gap-5">
              <p className="font-bold">ประเภท</p>
              <span>:</span>
              <p>{content.type}</p>
            </li>
            <li className="flex flex-row gap-5">
              <p className="font-bold">กล้ามเนื้อ</p>
              <span>:</span>
              <p>{content.muscle}</p>
            </li>
            <li className="flex flex-row gap-5">
              <p className="font-bold">อุปกรณ์</p>
              <span>:</span>
              <p>{content.items}</p>
            </li>
            <li className="flex flex-row gap-5">
              <p className="font-bold">ระดับ</p>
              <span>:</span>
              <p>{content.level}</p>
            </li>
          </ul>
          <h3 className="text-xl">วิธีปฏิบัติ</h3>
          <ul className="font-extralight list-decimal px-8 leading-10">
            {content.solutions &&
              content.solutions.map((value, idx: number) => {
                return <li key={idx}>{value}</li>
              })}
          </ul>
        </div>
      </div>
    </article>
  )
}

export default SolutionDetailPage
