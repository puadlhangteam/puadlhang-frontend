import { Outlet } from 'react-router-dom'

const FullPage = () => {
  return (
    <div className="flex">
      {/* <Navbar/> */}
      <Outlet />
      {/* <Footer/> */}
    </div>
  )
}
export default FullPage
