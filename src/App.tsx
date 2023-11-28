import { Route, Routes } from 'react-router-dom'
import GuardRoute from './Routes/GuardRoute'
import Login from './components/Login'
import Home from './feat/Home'
import FullPage from './layouts/FullPage'
import Userform from './components/Userform'
import Specialistform from './components/Specialistform'
import Certificatedform from './components/Certificatedform'
import SolutionPage from './pages/SolutionPage'
import SolutionDetail from './pages/SolutionDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<FullPage />}>
        <Route path="/login" element={<Login />} />
        <Route path="/userform" element={<Userform />} />
        <Route path="/specialist" element={<Specialistform />} />
        <Route path="/certificated" element={<Certificatedform />} />
        <Route path='/solution' element={<SolutionPage />} />
        <Route path='/solutiondetail/' element={<SolutionDetail />} />
        <Route index element={<Home />} />

        <Route element={<GuardRoute />}>{/* Login Required Section */}</Route>
      </Route>
    </Routes>
  )
}

export default App
