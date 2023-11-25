export type pathURL = string

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
  username: string
  text: string
  rating: number
  createdAt: number
  picture: string
}
