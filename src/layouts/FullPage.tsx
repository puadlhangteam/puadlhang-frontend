import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const FullPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
      <Outlet />
      {/* <Footer/> */}
    </div>
    </>

  )
}
export default FullPage
