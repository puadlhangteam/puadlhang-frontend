import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../providers/Authprovider'

const Profile = () => {
  const { user } = useAuth()

  const navigate = useNavigate()

  const handleEditProfile = async (e: FormEvent) => {
    e.preventDefault()
    navigate('/login/editprofile')
  }

  const handleEditSpecialistform = async (e: FormEvent) => {
    e.preventDefault()
    navigate('/login/specialist')
  }

  if (!user) return
  return (
    <div className="flex-col justify-center items-center top-36 sm:right-24 md:right-44 lg:right-20 xl:right-40 2xl:right-64 w-4/5 mx-auto">
      <div className="text-neutral-800 text-[31.25px] text-center font-bold font-['Zen Kaku Gothic Antique'] leading-9 ">
        Profile detail
      </div>
      <div className="mt-12">
        <form action="" className="mt-6 mx-12">
          <div className="my-5 mx-12 flex justify-center text-black text-[30px] font-bold font-['Epilogue']">
            {user && user.picture && user.username && (
              <img className="Ellipse221 w-40 h-40 bg-white rounded-full " src={user.picture} alt={user.username} />
            )}
          </div>
          <div className="flex justify-center">
            <form className="grid grid-cols-2 gap-y-3 w-2/3 text-[24px]">
              <p className="col-start-1 font-bold">Name :</p>
              {user.username && <p className="col-start-2"> {user.username}</p>}
              <p className="col-start-1 font-bold">Gender :</p>
              {user.gender && <p className="col-start-2">{user.gender}</p>}
              <p className="col-start-1 font-bold">Age :</p>
              {user.gender && <p className="col-start-2">{user.age}</p>}

              {user.isSpecialist && (
                <>
                  <p className="col-start-1">Role:</p>
                  <p className="col-start-2">{user.isSpecialist}</p>
                </>
              )}
              <button
                type="submit"
                onClick={handleEditProfile}
                className="w-48 bg-orange-600 text-white text-lg font-bold rounded-3xl  py-3 active:scale-[0.98] active:deration-75 hover:scale-[1.01] ease-in-out transition-all"
              >
                Edit profile
              </button>
              <button
                type="submit"
                onClick={handleEditSpecialistform}
                className="w-48 bg-orange-600 text-white text-lg font-bold rounded-3xl  py-3 active:scale-[0.98] active:deration-75 hover:scale-[1.01] ease-in-out transition-all"
              >
                Specilistform
              </button>
            </form>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Profile
