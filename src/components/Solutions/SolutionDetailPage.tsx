function SolutionDetailPage() {
  return (
    <article className="py-16">
      <div className="flex w-full font-kanit font-light shadow-[rgba(8,_69,_210,_0.2)_0px_9px_40px] bg-taily rounded-lg p-16">
        <div className="w-2/5 rounded-md">
          <img
            src="https://www.muscle-joint-pain.com/wp-content/uploads//sternocleidomastoid-tendon-palpation.jpg"
            alt=""
            className="w-full rounded-lg"
          />
        </div>
        <div className="w-3/5 pl-28">
          <h1 className="text-3xl">ยืดกล้ามเนื้อหลังและไหล่</h1>
          <ul className="py-3 leading-7">
            <li className="flex flex-row gap-5">
              <p className="font-bold">ประเภท</p>
              <span>:</span>
              <p>ยืดเหยียด</p>
            </li>
            <li className="flex flex-row gap-5">
              <p className="font-bold">กล้ามเนื้อ</p>
              <span>:</span>
              <p>กล้ามเนื้อหลังและไหล่</p>
            </li>
            <li className="flex flex-row gap-5">
              <p className="font-bold">อุปกรณ์</p>
              <span>:</span>
              <p>ไม่จำเป็นต้องใช้</p>
            </li>
            <li className="flex flex-row gap-5">
              <p className="font-bold">ระดับ</p>
              <span>:</span>
              <p>ง่าย</p>
            </li>
          </ul>
          <h3 className="text-xl">วิธีปฏิบัติ</h3>
          <ul className="font-extralight list-decimal px-8 leading-10">
            <li>ยืนตรง ก้มไหล่ไปด้านหน้าให้มากที่สุดเท่าที่จะทําได้ ค้างไว้ 15-30 วินาที</li>
            <li>ยืนตรง ยกแขนขวาขึ้นเหนือศีรษะให้มากที่สุดเท่าที่จะทําได้ ค้างไว้ 15-30 วินาที สลับไปทางด้านซ้าย</li>
            <li>ยืนตรง กางแขนออก 90 องศา หมุนไหล่ไปข้างหลังให้มากที่สุด ค้างไว้ 15-30 วินาที สลับทั้ง 2 ข้าง</li>
            <li>ทําซ้ําๆ สลับข้าง ประมาณ 10 ครั้ง</li>
          </ul>
        </div>
      </div>
    </article>
  )
}

export default SolutionDetailPage
