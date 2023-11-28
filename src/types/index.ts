export type IAllowGender = 'male' | 'female'
export type TAllowLevel = 'ง่าย' | 'กลาง' | 'ยาก'
export type pathURL = string
export type ObjectId = string
// user request a specialist status
export type IReqSpecialistFormDTO = {
  certificate: pathURL
  description?: string
}

// user data
export type IUserDTO = {
  username: string
  uid: ObjectId
  email: string
  picture?: pathURL
  gender?: IAllowGender
  age?: number
  isSpecialist?: string
}

// update user data
export type IReqUpdateUserDTO = Partial<IUserDTO>

// general response
export type IMessageDTO = { message: string }

// all solutions
export type IResSolutionsDTO = {
  solutionId: ObjectId
  name: string
  type: string
  muscle: string
  items?: string[]
  level: TAllowLevel
  solutions: string[]
  pictures: pathURL[]
  videoUrl?: pathURL
}

// post comment
export type IReqComment = {
  text: string
  rating: number
}

//single solution
export type IResSolutionDTO = {
  solutionId: ObjectId
  name: string
  type: string
  muscle: string
  items?: string[]
  level: TAllowLevel
  solutions: string[]
  pictures: pathURL[]
  videoUrl?: pathURL
  comments: {
    OwnerUid: IUserDTO
    text: string
    rating: number
    createdAt: number
  }[]
}

//get review homepage
export type ICommentDTO = {
  uid: ObjectId
  postedBy: IUserDTO
  username: string
  picture?: pathURL
  text: string
  rating: number
  createdAt: number
}
export type ICommentsDTO = {
  data: ICommentDTO[]
}
