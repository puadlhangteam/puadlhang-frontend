import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'
import { ReviewsDTO } from '../../../types/home'
import classes from './Review.module.css'

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
      <Stack spacing={1}>
        <Rating name="size-medium" defaultValue={review.rating} />
      </Stack>
      <h4 className={classes.description}>{review.description}</h4>
    </div>
  )
}

export default Review
