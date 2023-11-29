import { Route, Routes } from 'react-router-dom'
import GuardRoute from './Routes/GuardRoute'
import Login from './components/Login/Login'
import Specialistform from './components/Login/Specialistform'
import Userform from './components/Login/Userform'
import FullPage from './layouts/FullPage'
import LoginPage from './layouts/LoginPage'
import Home from './pages/HomePage/Home'
import SolutionDetail from './pages/SolutionDetail'
import SolutionPage from './pages/SolutionPage'
import Profile from './components/Login/Profile'
import EditProfile from './components/Login/EditProfile'

function App() {
  return (
    <Routes>
      <Route path="/" element={<FullPage />}>
        <Route index element={<Home />} />
        <Route path="login" element={<LoginPage />}>
          <Route index element={<Login />} />
          <Route path="userform" element={<Userform />} />
          <Route path="specialist" element={<Specialistform />} />
          <Route path="profile" element={<Profile />} />
          <Route path="editprofile" element={<EditProfile />} />
        </Route>
        <Route path="solutions">
          <Route index element={<SolutionPage />} />
          <Route path=":solutionId" element={<SolutionDetail />} />
        </Route>

        <Route element={<GuardRoute />}>{/* Login Required Section */}</Route>
      </Route>
    </Routes>
  )
}

export default App
