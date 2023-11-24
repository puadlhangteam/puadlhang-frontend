import { Route, Routes } from 'react-router-dom'
import GuardRoute from './Routes/GuardRoute'
import Login from './components/Login'
import Home from './feat/Home'
import FullPage from './layouts/FullPage'

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
