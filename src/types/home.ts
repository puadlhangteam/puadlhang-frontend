export type pathURL = string
import { IUserDTO } from '.'

export enum SelectedPageDTO {
  IntroWeb = 'introweb',
  Body = 'body',
  BlogSpecialist = 'blogspecialist',
  Reviews = 'reviwes',
  AboutUs = 'aboutus',
}

export interface BlogSpecialistDTO {
  username: JSX.Element
  picture?: pathURL
  text: string
  isSpecialist?: string
}

export interface ReviewsDTO {
  OwnerUid: IUserDTO
  text: string
  rating: number
  createdAt: number
}
