import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import DefaultUserImage from '../../assets/default_profile/images.png'
import { useAuth } from '../../providers/Authprovider'
import Logo from '../../assets/home/Logo.svg'

const Navbar = () => {
  const [navIsVisible, setNavIsVisible] = useState(false)
  const { user, signOutAuth } = useAuth()

  const navigate = useNavigate()

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
      return !curState
    })
  }

  const handleSignIn = () => {
    navigate('/login')
  }

  const handleSignOut = () => {
    signOutAuth()
    navigate('/')
  }

  return (
    <section className="sticky h-[10vh] top-0 left-0 right-0 z-50 bg-white w-full shadow-[rgba(7,_75,_110,_0.1)_1px_40px_30px] ">
      <header className="container mx-auto w-4/5 flex justify-between py-4 items-center">
        <div onClick={() => navigate('/')} className="cursor-pointer">
          <img className="h-[7vh]" src={Logo} alt="logo" />
        </div>
        <div className="lg:hidden z-50">
          {navIsVisible ? (
            <AiOutlineClose className="w-6 h-6" onClick={navVisibilityHandler} />
          ) : (
            <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler} />
          )}
        </div>
        <div
          className={`${
            navIsVisible ? 'right-0' : '-right-full'
          } transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
        >
          <div className="flex items-center justify-between">
            {user ? (
              <>
                <Link to={'/profile'} className="flex items-center justify-center gap-3 mx-5">
                  {<img src={user.picture || DefaultUserImage} className="rounded-full h-10 w-10" alt="userProfile" />}
                  <p>{user.username}</p>
                </Link>
                <button
                  onClick={handleSignOut}
                  className="mt-5 lg:mt-0 border-2 border-orange-500 px-6 py-2 text-3xl rounded-full text-orange-500  hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleSignIn}
                  className="mt-5 lg:mt-0 border-2 border-orange-500 px-6 py-2 text-3xl rounded-full text-orange-500  hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  Sign in
                </button>
              </>
            )}
          </div>
        </div>
      </header>
    </section>
  )
}

export default Navbar
