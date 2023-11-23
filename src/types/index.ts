// UserData
export type IUserDTO = {
  username: string
  uid: string
  email: string
  picture?: string
  gender?: 'male' | 'female'
  age?: number
  isSpecialist?: boolean
}

export type IUpdateUserDTO = IUserDTO

// Form data to apply specialist role
export type ISpecialistFormDTO = {
  certificate: string
  description?: string
}

// Response Message include Error Message
export type IMessageDTO = { message: string }

// Solution data DTO
export type ISolutionDTO = {
  name: string
  type: string
  muscle: string
  items?: string[]
  level: string
  solutions: string[]
  pictures: string[]
  videoUrl?: string
  comments: {
    OwnerUid: string
    text: string
    rating: number
    createdAt: Date
  }[]
}
