import { ReviewsDTO } from '../../../types/home'
import classes from './Review.module.css'
import Github from '../../../assets/icons/GitHub.svg'

interface IReviweDTO {
  review: ReviewsDTO
}

const Review = ({ review }: IReviweDTO) => {
  return (
    <div className={classes.container}>
      <div className={classes.containercardimg}>
        <div className={classes.cardimg}>
          <img className={classes.img} src={review.thumbnailUrl} />
        </div>
      </div>
      <p className={classes.author}>{review.username}</p>
      <a href={review.github} target="_blank" rel="noopener noreferrer">
        <img src={Github} alt="github" />
      </a>
      <h4 className={classes.description}>{review.description}</h4>
    </div>
  )
}

export default Review
