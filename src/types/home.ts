export type pathURL = string

export enum SelectedPageDTO {
  IntroWeb = 'introweb',
  Body = 'body',
  BlogSpecialists = 'blogspecialists',
  Reviews = 'reviwes',
  AboutUs = 'aboutus',
}

export interface BlogSpecialistDTO {
  thumbnailUrl: string
  description: string
  user: string
  date: string
}
