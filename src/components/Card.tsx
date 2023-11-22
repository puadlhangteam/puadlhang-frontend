const Card = () => {
  return (
    <div className="Rectangle1 w-[1295px] h-[863px] bg-white bg-opacity-90 rounded-3xl grid grid-cols-2 gap-4 place-content-stretch ">
      <img
        className="Image11 w-[508px] h-[720px] mt-[54px] ml-[60px] mr-[89px] rounded-3xl"
        src="https://via.placeholder.com/508x720"
      />
      <div className="mt-[34px]">
        <div className="Title text-neutral-800 text-[45px] font-normal font-['Kanit']">ยืดกล้ามเนื้อหลังและไหล่</div>
        <div className="mt-[18px]">
          <div className="flex items-center ">
            <span className="font-bold font-['Kanit'] text-[30px]">ประเภท:</span>
            <span className="font-normal font-['Kanit'] text-[30px]"> &nbsp;&nbsp;ยืดเหยียด</span>
          </div>
          <div className="flex items-center">
            <span className="font-bold font-['Kanit'] text-[30px]">กล้ามเนื้อ:</span>
            <span className="font-normal font-['Kanit'] text-[30px]">&nbsp;&nbsp;กล้ามเนื้อหลังและไหล</span>
          </div>
          <div className="flex items-center">
            <span className="font-bold font-['Kanit'] text-[30px]">อุปกรณ์: </span>
            <span className="font-normal font-['Kanit'] text-[30px]">&nbsp;&nbsp; ไม่ต้องใช้</span>
          </div>
          <div className="flex items-center">
            <span className="font-bold font-['Kanit'] text-[30px]">ระดับ: </span>
            <span className="font-normal font-['Kanit'] text-[30px]">&nbsp;&nbsp; ง่าย</span>
          </div>
          <div className="mt-[80px]">
            <span className="font-bold font-['Kanit'] text-[30px] flex">วิธีปฏิบัติ: </span>
            <div>
              <span className="font-normal font-['Kanit'] text-[25px] break-normal">
                ยืนตรง ก้มไหล่ไปด้านหน้าให้มากที่สุดเท่าที่จะทําได้ ค้างไว้ 15-30 วินาที ยืนตรง
                ยกแขนขวาขึ้นเหนือศีรษะให้มากที่สุดเท่าที่จะทําได้ ค้างไว้ 15-30 วินาที สลับไปทางด้านซ้า ยืนตรง กางแขนออก
                90 องศา หมุนไหล่ไปข้างหลังให้มากที่สุด ค้างไว้ 15-30 วินาที สลับทั้ง 2 ข้าง ทําซ้ําๆ สลับข้าง ประมาณ 10
                ครั้ง
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
