export type IUserDTO = {
  username: string
  uid: string
  email: string
  picture?: string
  gender?: 'male' | 'female'
  age?: number
  isSpecialist?: boolean
}
