import { FormEvent, useEffect, useState } from 'react'
import useUpdate from '../hooks/useUpdate'
import { IReqUpdateUserDTO } from '../types'
import { useAuth } from '../providers/Authprovider'
import { useNavigate } from 'react-router-dom'
import subtract from '../assets/icons/Subtract.svg'
import iconlogin from '../assets/icons/login/Userform.svg'
const Userform = () => {
  const { isSubmitting, updateUserform } = useUpdate()
  const [form, setForm] = useState<IReqUpdateUserDTO>({})
  const { user } = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    if (user) console.log(user)
  }, [user])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!form.gender || !form.age) {
      alert('Please select gender and age')
      return
    }

    try {
      const result = await updateUserform(form.gender, form.age)
      console.log(result)
      if (result?.age || result?.gender) {
        return
      } else {
        navigate('/specialist')
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="flex w-full h-screen relative bg-[url('../src/assets/icons/bg.svg')]">
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center">
        <div className="absolute backdrop-blur-lg" />
        <div className="flex">
          <img src={iconlogin} alt="group" className="lg:p-8 lg:mt-8" />
        </div>
      </div>
      <div className="lg:w-8/12 w-full bg-white bg-opacity-50 rounded-3xl border-2 border-gray-100 flex justify-center items-center ">
        <div className="flex-col justify-center items-center top-36 sm:right-24 md:right-44 lg:right-20 xl:right-40 2xl:right-64 w-4/5 mx-auto">
          <div className="text-neutral-800 text-[31.25px] text-center font-bold font-['Zen Kaku Gothic Antique'] leading-9 flex justify-self-center">
            Join & Connect the Fastest Growing Online Community
          </div>

          <div className="mt-12">
            <form action="" onSubmit={handleSubmit} className="mt-6 mx-12">
              <div className="my-5 mx-12 flex items-center gap-2">
                <label>Please select your gender identity</label>
                <img src={subtract} />
              </div>
              <div className="my-10 mx-12 flex items-center gap-10">
                <button
                  onClick={() => setForm((f) => ({ ...f, gender: 'female' }))}
                  className="w-48 bg-white text-black text-[30px] font-bold font-['Epilogue']  rounded-3xl py-3 active:scale-[0.98] active:deration-75 hover:scale-[1.01] ease-in-out transition-all hover:bg-orange-500"
                  aria-required
                >
                  Female
                </button>
                <button
                  onClick={() => setForm((f) => ({ ...f, gender: 'male' }))}
                  className="w-48 bg-white text-black text-[30px] font-bold font-['Epilogue']   rounded-3xl py-3 active:scale-[0.98] active:deration-75 hover:scale-[1.01] ease-in-out transition-all hover:bg-orange-500"
                  aria-required
                >
                  Male
                </button>
              </div>

              <div className="my-10 mx-12 flex items-center gap-2">
                <label>Please select your age</label>
                <img src={subtract} />
              </div>
              <div className="mt-8 mx-12 flex justify-between items-center">
                <div>
                  <input
                    onChange={(e) => setForm((f) => ({ ...f, age: parseInt(e.target.value) }))}
                    value={form.age || ''}
                    required
                    className="text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-700 dark:focus:border-orange-700 dark:border-gray-700 dark:bg-gray-800 bg-transparent font-normal w-full h-10 flex items-center pl-3 p-4 mt-1 text-sm border-gray-500 rounded-xl border shadow"
                    placeholder="Enter your age"
                  />
                </div>
              </div>
              <div className="mt-12 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-48 bg-orange-600 text-white text-lg font-bold rounded-3xl py-3 active:scale-[0.98] active:deration-75 hover:scale-[1.01] ease-in-out transition-all"
                >
                  {isSubmitting ? 'confriming...' : 'confrim'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Userform
