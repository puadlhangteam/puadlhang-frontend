export type pathURL = string
import { IUserDTO } from '.'

export enum SelectedPageDTO {
  IntroWeb = 'introweb',
  Body = 'body',
  BlogSpecialists = 'blogspecialists',
  Reviews = 'reviwes',
  AboutUs = 'aboutus',
}

export interface BlogSpecialistDTO {
  username: string
  picture: JSX.Element
  text: string
}

export interface ReviewsDTO {
  OwnerUid: IUserDTO
  text: string
  rating: number
  createdAt: number
}
