import SolutionCard from './SolutionCard'

const Solution = () => {
  return (
    <section className="flex flex-col  container mx-auto px-5">
      <div>
        <h1 className="font-kanit text-xl sm:text-3xl text-amber py-5">กล้ามเนื้อช่วงหลังเเละไหล่</h1>
        <div className=" flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
          <SolutionCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
          <SolutionCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
          <SolutionCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
        </div>
      </div>
      <div>
        <h1 className="font-kanit text-xl sm:text-3xl text-amber py-5">กล้ามเนื้อช่วงหลังเเละไหล่</h1>
        <div className=" flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
          <SolutionCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
          <SolutionCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
          <SolutionCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
        </div>
      </div>
      <div>
        <h1 className="font-kanit text-xl sm:text-3xl text-amber py-5">กล้ามเนื้อช่วงหลังเเละไหล่</h1>
        <div className=" flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
          <SolutionCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
          <SolutionCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
          <SolutionCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
        </div>
      </div>
    </section>
  )
}

export default Solution
