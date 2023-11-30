import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

const FullPage = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
        {/* <Footer/> */}
      </div>
    </div>
  )
}
export default FullPage
