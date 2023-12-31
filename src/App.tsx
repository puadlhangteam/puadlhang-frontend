import { Route, Routes } from 'react-router-dom'
import GuardRoute from './Routes/GuardRoute'
import Login from './components/Login/Login'
import Specialistform from './components/Login/Specialistform'
import Userform from './components/Login/Userform'
import FullPage from './layouts/FullPage'
import LoginPage from './layouts/LoginPage'
import Home from './pages/HomePage/Home'
import SolutionDetailPage from './pages/SolotuonPages/SolutionDetailPage'
import SolutionsPage from './pages/SolotuonPages/SolutionsPage'
import Profile from './components/Login/Profile'
import EditUser from './components/Login/EditUser'

function App() {
  return (
    <Routes>
      <Route path="/" element={<FullPage />}>
        <Route index element={<Home />} />
        <Route element={<LoginPage />}>
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="login" element={<LoginPage />}>
          <Route index element={<Login />} />
          <Route path="userform" element={<Userform />} />
          <Route path="specialist" element={<Specialistform />} />
          <Route path="editprofile" element={<EditUser />} />
        </Route>
        <Route path="solutions">
          <Route index element={<SolutionsPage />} />
          <Route path=":solutionId" element={<SolutionDetailPage />} />
        </Route>

        <Route element={<GuardRoute />}>{/* Login Required Section */}</Route>
      </Route>
    </Routes>
  )
}

export default App
