const Specialistform = () => {
  return (
    <div className="flex-col justify-center items-center top-36 sm:right-24 md:right-44 lg:right-20 xl:right-40 2xl:right-64 w-4/5 mx-auto">
      <div className="text-neutral-800 text-[31.25px] text-center font-bold font-['Zen Kaku Gothic Antique'] leading-9 flex justify-self-center">
        Join & Connect the Fastest Growing Online Community
      </div>

      <div className="mt-12">
        <form action="" className="mt-6 mx-12">
          <div className="my-5 mx-12 flex items-center gap-2">
            <label>Please select your role identity</label>
            <img src="src/assets/icons/Subtract.svg" alt="group" />
          </div>
          <div className="my-10 mx-12 flex items-center gap-10">
            <button className="w-48 bg-white text-black text-[30px] font-bold font-['Epilogue']  rounded-3xl py-3 active:scale-[0.98] active:deration-75 hover:scale-[1.01] ease-in-out transition-all hover:bg-orange-500">
              General
            </button>
            <button className="w-48 bg-white text-black text-[30px] font-bold font-['Epilogue']   rounded-3xl py-3 active:scale-[0.98] active:deration-75 hover:scale-[1.01] ease-in-out transition-all hover:bg-orange-500">
              Specialist
            </button>
          </div>
          <div className="mt-[100px] text-center">
            <button className="w-48 bg-orange-600 text-white text-lg font-bold rounded-3xl py-3 active:scale-[0.98] active:deration-75 hover:scale-[1.01] ease-in-out transition-all">
              CONFRIM
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Specialistform
