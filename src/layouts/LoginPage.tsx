import { Outlet } from 'react-router-dom'
import Group from '../assets/icons/Group.svg'

const LoginPage = () => {
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
