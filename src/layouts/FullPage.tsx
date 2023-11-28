import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const FullPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
      <Outlet />
      {/* <Footer/> */}
    </div>
    </div>

  )
}
export default FullPage
