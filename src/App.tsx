import { Route, Routes } from 'react-router-dom'
import GuardRoute from './Routes/GuardRoute'
import Login from './components/Login/Login'
import Specialistform from './components/Login/Specialistform'
import Userform from './components/Login/Userform'
import FullPage from './layouts/FullPage'
import SolutionPage from './pages/SolutionPage'
import SolutionDetail from './pages/SolutionDetail'
import LoginPage from './layouts/LoginPage'
import Home from './pages/HomePage/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<FullPage />}>
        <Route path='/solution' element={<SolutionPage />} />
        <Route path='/solutiondetail/' element={<SolutionDetail />} />
        <Route path="/login" element={<LoginPage />}>
          <Route index element={<Login />} />
          <Route path="userform" element={<Userform />} />
          <Route path="specialist" element={<Specialistform />} />
          {/* <Route path="certificated" element={<Certificatedform />} /> */}
        </Route>
        <Route index element={<Home />} />

        <Route element={<GuardRoute />}>{/* Login Required Section */}</Route>
      </Route>
    </Routes>
  )
}

export default App
