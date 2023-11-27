import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const FullPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
      <Outlet />
    </div>
    </>

  )
}
export default FullPage
