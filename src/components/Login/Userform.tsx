import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import subtract from '../../assets/icons/Subtract.svg'
import useUpdate from '../../hooks/useUpdate'

const Userform = () => {
  const { isSubmitting, updateUser } = useUpdate()
  const [gender, setGender] = useState<'male' | 'female' | null>(null)
  const [age, setAge] = useState<number | null>(null)
  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!gender || !age) {
      alert('Please select gender and age')
      return
    }

    try {
      await updateUser(gender, age)
      navigate('/login/specialist')
    } catch (err) {
      console.log(err)
    }
  }
  return (
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
              onClick={(e) => {
                e.preventDefault()
                setGender('female')
              }}
              className={`w-48  text-black text-[30px] font-bold font-['Epilogue']  rounded-3xl py-3 active:scale-[0.98] active:deration-75 hover:scale-[1.01] ease-in-out transition-all ${
                gender === 'female' ? 'bg-orange-500' : 'bg-white'
              }`}
              aria-required
            >
              Female
            </button>
            <button
              onClick={(e) => {
                e.preventDefault()
                setGender('male')
              }}
              className={`w-48 text-black text-[30px] font-bold font-['Epilogue']   rounded-3xl py-3 active:scale-[0.98] active:deration-75 hover:scale-[1.01] ease-in-out transition-all  ${
                gender === 'male' ? 'bg-orange-500' : 'bg-white'
              }`}
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
                onChange={(e) => {
                  e.preventDefault()
                  setAge(parseInt(e.target.value))
                }}
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
  )
}

export default Userform
