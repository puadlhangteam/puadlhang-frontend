import { useAuth } from '../../providers/Authprovider'
import EditProfile from './EditProfile'

const EditUser = () => {
  const { user } = useAuth()
  if (!user) return null
  return <EditProfile user={user} />
}

export default EditUser
