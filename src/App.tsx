import { initializeApp } from 'firebase/app'
import { Route, Routes } from 'react-router-dom'
import GuardRoute from './Routes/GuardRoute'
import Login from './components/Login'
import { firebaseConfig } from './secret/config'
import FullPage from './layouts/FullPage'
import Home from './feat/Home'

initializeApp(firebaseConfig)
function App() {
  return (
    <Routes>
      <Route path="/" element={<FullPage />}>
        <Route path="login" element={<Login />} />
        <Route index element={<Home />} />

        <Route element={<GuardRoute />}>{/* Login Required Section */}</Route>
      </Route>
    </Routes>
  )
}

export default App
