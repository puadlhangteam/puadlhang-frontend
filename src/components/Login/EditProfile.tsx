import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import close from '../../assets/icons/close.svg'

import useUpdate from '../../hooks/useUpdate'
import { IUserDTO } from '../../types'
interface IEditProfileProp {
  user: IUserDTO
}
const EditProfile = ({ user }: IEditProfileProp) => {
  const [name, setName] = useState<string>(user.username)
  const [gender, setGender] = useState<'male' | 'female' | undefined>(user.gender)
  const [age, setAge] = useState<number | undefined>(user.age)
  const [profileImg, setProfileImage] = useState<File | null>(null)
  const { isSubmitting, updateProfile, uploadFileProfile } = useUpdate()
  const navigate = useNavigate()

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files) {
      setProfileImage(e.target.files[0])
      e.target.files = null
      e.target.value = ''
    }
  }
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      let picture: string | undefined
      if (profileImg) {
        picture = await uploadFileProfile(profileImg)
        if (!picture) {
          alert('can not upload image')
          return
        }
      }
      if (!name) {
        alert('can not name cant be empty.')
        return
      }
      await updateProfile({
        age,
        gender,
        username: name,
        picture,
      })
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }
  if (!user) return
  return (
    <div className="flex-col justify-center items-center top-36 sm:right-24 md:right-44 lg:right-20 xl:right-40 2xl:right-64 w-4/5 mx-auto">
      <div className="text-neutral-800 text-[31.25px] text-center font-bold font-['Zen Kaku Gothic Antique'] leading-9 ">
        Profile detail
      </div>
      <div className="mt-12">
        <form action="" onSubmit={handleSubmit} className="mt-6 mx-12">
          <div className="my-5 mx-12 flex justify-center text-black text-[30px] font-bold font-['Epilogue']">
            <img
              src={profileImg ? URL.createObjectURL(profileImg) : user.picture}
              className="Ellipse221 w-28 h-40 bg-white rounded-full "
            />
          </div>
          <div className="flex justify-center flex-col items-center">
            <div className="flex gap-5">
              <input
                type="file"
                className="col-start-1 col-end-3 w-[4.3rem] overflow-hidden text-black text-[10px] font-bold font-['Epilogue']  rounded-3xl py-3 active:scale-[0.98] active:deration-75 hover:scale-[1.01] ease-in-out transition-all"
                onChange={handleFileChange}
              />
              <img
                src={close}
                onClick={(e) => {
                  e.preventDefault()
                  setProfileImage(null)
                }}
              />
            </div>
            <div className="grid grid-cols-2 gap-y-3 w-2/3 text-[24px]">
              <p className="col-start-1 font-bold">Name :</p>
              <input
                type="text"
                defaultValue={name}
                onChange={(e) => {
                  e.preventDefault()
                  setName(e.target.value)
                }}
                required
                className="text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-transparent font-normal w-full h-10 flex items-center pl-3 p-4 mt-1 text-sm border-gray-500 rounded-xl border shadow"
                placeholder="Enter your name..."
              />
              <p className="col-start-1 font-bold">Gender :</p>
              <div className="flex justify-between gap-3">
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    setGender('female')
                  }}
                  className={`w-60 h-12  text-black text-[18px] font-bold font-['Epilogue']  rounded-2xl py-3 active:scale-[0.98] active:deration-75 hover:scale-[1.01] ease-in-out transition-all ${
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
                  className={`w-60 text-black text-[18px] font-bold font-['Epilogue']   rounded-2xl py-3 active:scale-[0.98] active:deration-75 hover:scale-[1.01] ease-in-out transition-all  ${
                    gender === 'male' ? 'bg-orange-500' : 'bg-white'
                  }`}
                  aria-required
                >
                  Male
                </button>
              </div>
              <p className="col-start-1 font-bold">Age :</p>
              <input
                defaultValue={age}
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
          <div className="flex justify-center">
            <div className="mt-12 text-center ">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-48 bg-orange-600 text-white text-lg font-bold rounded-3xl py-3 active:scale-[0.98] active:deration-75 hover:scale-[1.01] ease-in-out transition-all"
              >
                {isSubmitting ? 'confriming...' : 'confrim'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProfile
