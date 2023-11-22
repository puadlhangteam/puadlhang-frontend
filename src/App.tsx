import { initializeApp } from 'firebase/app'
import { Route, Routes } from 'react-router-dom'
import GuardRoute from './Routes/GuardRoute'
import Login from './components/Login'
import { firebaseConfig } from './configs/firebase.config'
import FullPage from './layouts/FullPage'
import Userform from './components/Userform'
import Specialistform from './components/Specialistform'
import Certificatedform from './components/Certificatedform'

initializeApp(firebaseConfig)
function App() {
  return (
    <Routes>
      <Route path="/" element={<FullPage />}>
        <Route path="login" element={<Login />} />
        <Route path="userform" element={<Userform />} />
        <Route path="speciallistform" element={<Specialistform />} />
        <Route path="certificatedform" element={<Certificatedform />} />
        <Route element={<GuardRoute />}>{/* Login Required Section */}</Route>
      </Route>
    </Routes>
  )
}

export default App
