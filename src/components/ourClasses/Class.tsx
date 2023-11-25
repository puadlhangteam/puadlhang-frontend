import { ContentDTO } from '../../../types/dto'
import classes from './Content.module.css'
import { Link } from 'react-router-dom'

interface IContentProps {
  content: ContentDTO
}

const Content = ({ content }: IContentProps) => {
  return (
    <div className={classes.post}>
      <Link to={`/post/${content.id}`} style={{ textDecoration: 'none', color: 'white' }}>
        <img className={classes.thumbnailurl} src={content.thumbnailUrl}></img>
        <p>title: {content.videoTitle}</p>
        <h4>{content.comment}</h4>
        <p>{content.postedBy.username}</p>
        <p>{content.rating}</p>
      </Link>
    </div>
  )
}

export default Content
