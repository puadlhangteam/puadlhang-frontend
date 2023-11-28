import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Group from '../assets/icons/Group.svg'
import { useAuth } from '../providers/Authprovider'

const LoginPage = () => {
  const { user } = useAuth()
  const { pathname } = useLocation()
  console.log(pathname)

  const navigate = useNavigate()
  useEffect(() => {
    switch (pathname) {
      case '/login':
        if (!user) break
        if (!user.age || !user.gender) {
          navigate('/login/userform')
          break
        }
        navigate('/')
        break
      case '/login/userform':
        if (!user) {
          navigate('/login')
          break
        }
        if (user.age || user.gender) {
          navigate('/')
          break
        }
        break
      case '/login/specialist':
        break
    }
  }, [pathname, user, navigate])

  return (
    <div className="flex w-full h-screen bg-[url('../src/assets/icons/bg.svg')]">
      <div className="lg:flex h-full w-1/2 items-center justify-center">
        <div className="backdrop-blur-lg" />
        <img src={Group} alt="group" className="lg:p-8 lg:mt-8" />
      </div>
      <div className="lg:w-8/12 w-full bg-white rounded-3xl border-2 border-gray-100 bg-opacity-50 flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  )
}
export default LoginPage
