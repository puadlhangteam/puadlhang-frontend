const Minicard = () => {
  return (
    <div className="Rectangle4 w-80 h-96 bg-blue-300 bg-opacity-90 rounded-3xl shadow-lg">
      <img className="Image1 w-80 h-56 rounded-tl-3xl rounded-tr-3xl" src="https://via.placeholder.com/344x222" />
      <div className="flex justify-center flex-col  items-center">
        <div className="text-center text-neutral-700 text-xl font-medium font-['Poppins'] tracking-wider  break-normal  pt-2 px-5">
          ยืดกล้ามเนื้อช่วงหลังและไหล่ด้วยบอล
        </div>
        <span className="text-gray-300 hover:text-yellow-500 text-[25px] ">★★★★★</span>
        <div className="w-32 h-11 flex-col flex justify-center items-center bg-white hover:bg-orange-200 rounded-2xl">
          <div className="text-lg text-center text-orange-500 text-opacity-90  font-bold font-['Epilogue'] tracking-wide">
            อ่านต่อ
          </div>
        </div>
      </div>
    </div>
  )
}

export default Minicard
