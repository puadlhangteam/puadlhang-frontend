import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
          <img src="src/assets/icons/Userform.svg" alt="group" className="lg:p-8 lg:mt-8" />
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
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25ZM10.5839 9.85257V10.377L11.9264 10.5868L10.458 17.3624C10.3881 17.684 10.3322 17.9777 10.2902 18.2434C10.2482 18.5091 10.2273 18.7818 10.2273 19.0615C10.2273 19.2993 10.3112 19.509 10.479 19.6908C10.6608 19.8726 10.9545 19.9635 11.36 19.9635C11.7376 19.9635 12.1222 19.8936 12.5138 19.7538C12.9053 19.6139 13.248 19.4321 13.5417 19.2084V18.663H11.9893L13.9612 9.34912L13.5836 9.09739C13.3878 9.09739 13.1641 9.12536 12.9123 9.1813C12.6606 9.22325 12.3949 9.27919 12.1152 9.34912C11.8355 9.41904 11.5628 9.50295 11.2971 9.60084C11.0314 9.68475 10.7936 9.76866 10.5839 9.85257ZM12.6187 4.86001C12.3949 5.06978 12.283 5.35647 12.283 5.72007C12.283 6.06969 12.3949 6.3424 12.6187 6.53818C12.8424 6.73397 13.1361 6.83186 13.4997 6.83186C13.8913 6.83186 14.1989 6.73397 14.4227 6.53818C14.6464 6.3424 14.7583 6.06969 14.7583 5.72007C14.7583 5.35647 14.6464 5.06978 14.4227 4.86001C14.1989 4.65024 13.8913 4.54536 13.4997 4.54536C13.1361 4.54536 12.8424 4.65024 12.6187 4.86001Z"
                    fill="#3DA5DF"
                  />
                </svg>
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
