import { images } from '../constants/index'
import { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { navItemsInfo } from '../configs/naviteminfo'
import NavItem from './NavItem'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../providers/Authprovider'

const Navbar = () => {
  const [navIsVisible, setNavIsVisible] = useState(false)
  const { auth, isLoggedIn, user, signOutAuth } = useAuth()

  const navigate = useNavigate()
  useEffect(() => {
    if (user) console.log(user)
  }, [user])

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) console.log(user)
    })

    return unsubscribe
  }, [auth])

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
    <section className="sticky top-0 left-0 right-0 z-50 bg-orange-300 w-full">
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <div>
          <img className="w-48" src={images.Logo} alt="logo" />
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
          <ul className="text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold">
            {navItemsInfo.map((item, index) => (
              <NavItem key={index} item={item} />
            ))}
          </ul>
          <div>
            {isLoggedIn ? (
              <button
                onClick={handleSignOut}
                className="mt-5 lg:mt-0 border-2 border-orange-500 px-6 py-2 rounded-full text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                Sign out
              </button>
            ) : (
              <button
                onClick={handleSignIn}
                className="mt-5 lg:mt-0 border-2 border-orange-500 px-6 py-2 rounded-full text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                Sign in
              </button>
            )}
          </div>
        </div>
      </header>
    </section>
  )
}

export default Navbar
