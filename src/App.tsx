import { initializeApp } from 'firebase/app'
import Login from './components/Login'
import { firebaseConfig } from './configs/firebase.config'

initializeApp(firebaseConfig)
function App() {
  return <Login />
}

export default App
