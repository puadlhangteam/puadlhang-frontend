import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import subtract from '../assets/icons/Subtract.svg'
import iconlogin from '../assets/icons/login/Userform.svg'

const Specialistform = () => {
  const navigate = useNavigate()
  const [selectedRole, setSelectedRole] = useState<string>()

  const handleGeneral = (e: FormEvent) => {
    e.preventDefault()
    setSelectedRole('general')
  }

  const handleSpecialist = (e: FormEvent) => {
    e.preventDefault()
    setSelectedRole('specialist')
  }
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (selectedRole === 'general') {
      navigate('/')
    } else if (selectedRole === 'specialist') {
      navigate('/certificated')
    }
  }
  return (
    <div className="flex w-full h-screen relative bg-[url('../src/assets/icons/bg.svg')]">
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center">
        <div className="absolute backdrop-blur-lg" />
        <div className="flex">
          <img src={iconlogin} className="lg:p-8 lg:mt-8" />
        </div>
      </div>
      <div className="lg:w-8/12 w-full bg-white bg-opacity-50 rounded-3xl border-2 border-gray-100 flex justify-center items-center ">
        <div className="flex-col justify-center items-center top-36 sm:right-24 md:right-44 lg:right-20 xl:right-40 2xl:right-64 w-4/5 mx-auto">
          <div className="text-neutral-800 text-[31.25px] text-center font-bold font-['Zen Kaku Gothic Antique'] leading-9 flex justify-self-center">
            Join & Connect the Fastest Growing Online Community
          </div>

          <div className="mt-12">
            <form action="" className="mt-6 mx-12">
              <div className="my-5 mx-12 flex items-center gap-2">
                <label>Please select your role identity</label>
                <img src={subtract} />
              </div>
              <div className="my-10 mx-12 flex items-center gap-10">
                <button
                  onClick={handleGeneral}
                  className="w-48 bg-white text-black text-[30px] font-bold font-['Epilogue']  rounded-3xl py-3 active:scale-[0.98] active:deration-75 hover:scale-[1.01] ease-in-out transition-all hover:bg-orange-500"
                >
                  General
                </button>
                <button
                  onClick={handleSpecialist}
                  className="w-48 bg-white text-black text-[30px] font-bold font-['Epilogue']   rounded-3xl py-3 active:scale-[0.98] active:deration-75 hover:scale-[1.01] ease-in-out transition-all hover:bg-orange-500"
                >
                  Specialist
                </button>
              </div>
              <div className="mt-[100px] text-center">
                <button
                  onClick={handleSubmit}
                  className="w-48 bg-orange-600 text-white text-lg font-bold rounded-3xl py-3 active:scale-[0.98] active:deration-75 hover:scale-[1.01] ease-in-out transition-all"
                >
                  CONFRIM
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Specialistform
