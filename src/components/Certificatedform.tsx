const Certificatedform = () => {
  return (
    <div className="flex-col justify-center items-center top-36 sm:right-24 md:right-44 lg:right-20 xl:right-40 2xl:right-64 w-4/5 mx-auto">
      <div className="text-neutral-800 text-[31.25px] text-center font-bold font-['Zen Kaku Gothic Antique'] leading-9 flex justify-self-center">
        Join & Connect the Fastest Growing Online Community
      </div>

      <div className="mt-12">
        <form action="" className="mt-6 mx-12">
          <div className="my-5 mx-12 flex items-center gap-2">
            <label>Please put your certificated identity</label>
            <img src="src/assets/icons/Subtract.svg" alt="group" />
          </div>
          <div className="my-10 mx-12 flex items-center gap-10">
            <div className="mx-auto w-[600px] h-[283.26px] rounded-lg border-2 border-gray-300 border-dashed cursor-pointer">
              <div className="flex justify-center pt-5 ">
                <svg
                  className="w-10 h-10 text-gray-400 group-hover:text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </div>

              <p className="flex justify-center text-gray-400 group-hover:text-blue-600 pt-1">Drag files here</p>
            </div>
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

export default Certificatedform
