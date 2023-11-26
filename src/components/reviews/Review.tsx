import { ICommentDTO } from '../../types'
import classes from './Review.module.css'
import { Link } from 'react-router-dom'

interface IReviweDTO {
  review: ICommentDTO
}

const Review = ({ review }: IReviweDTO) => {
  return (
    <div className={classes.post}>
      <Link to={`/post/${review.uid}`} style={{ textDecoration: 'none', color: 'white' }}>
        <img className={classes.thumbnailurl} src={review.picture}></img>
        <p>{review.postedBy.username}</p>
        <h4>{review.text}</h4>
        <p>{review.rating}</p>
      </Link>
    </div>
  )
}

export default Review
