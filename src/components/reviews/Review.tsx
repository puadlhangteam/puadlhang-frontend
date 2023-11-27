import { ReviewsDTO } from '../../types/home'
import classes from './Review.module.css'
import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'

interface IReviweDTO {
  review: ReviewsDTO
}

const Review = ({ review }: IReviweDTO) => {
  return (
    <div className={classes.container}>
      <div className={classes.containercardimg}>
        <div className={classes.cardimg}></div>
        <img className={classes.img} src={review.thumbnailUrl} />
      </div>
      <p className={classes.author}>{review.username}</p>
      <h4 className={classes.description}>{review.description}</h4>
      <Stack spacing={1}>
        <Rating name="size-medium" defaultValue={review.rating} />
      </Stack>
    </div>
  )
}

export default Review
