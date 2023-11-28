import { IResSolutionsDTO } from '../../types'

interface IContentprops {
  content: IResSolutionsDTO
}

const Card = ({ content }: IContentprops) => {
  return (
    <div className="Rectangle1 w-[1295px] h-[863px] bg-white bg-opacity-90 rounded-3xl grid grid-cols-2 gap-4 place-content-stretch ">
      {content.pictures.map((pic: string, idx: number) => (
        <img key={idx} className="Image11 w-[508px] h-[720px] mt-[54px] ml-[60px] mr-[89px] rounded-3xl" src={pic} />
      ))}

      <div className="mt-[34px]">
        <div className="Title text-neutral-800 text-[45px] font-normal font-['Kanit']">{content.name}</div>
        <div className="mt-[18px]">
          <div className="flex items-center ">
            <span className="font-bold font-['Kanit'] text-[30px]">ประเภท:</span>
            <span className="font-normal font-['Kanit'] text-[30px]"> &nbsp;&nbsp;{content.type}</span>
          </div>
          <div className="flex items-center">
            <span className="font-bold font-['Kanit'] text-[30px]">กล้ามเนื้อ:</span>
            <span className="font-normal font-['Kanit'] text-[30px]">&nbsp;&nbsp;{content.muscle}</span>
          </div>
          <div className="flex items-center">
            <span className="font-bold font-['Kanit'] text-[30px]">อุปกรณ์: </span>
            <span className="font-normal font-['Kanit'] text-[30px]">&nbsp;&nbsp;{content.items}</span>
          </div>
          <div className="flex items-center">
            <span className="font-bold font-['Kanit'] text-[30px]">ระดับ: </span>
            <span className="font-normal font-['Kanit'] text-[30px]">&nbsp;&nbsp; {content.level}</span>
          </div>
          <div className="mt-[80px]">
            <span className="font-bold font-['Kanit'] text-[30px] flex">วิธีปฏิบัติ: </span>
            <div>
              <span className="font-normal font-['Kanit'] text-[25px] break-normal">{content.solutions}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
