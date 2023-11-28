import { BlogSpecialistDTO } from '../../types/home'
import classes from './BlogSpecialist.module.css'

interface IBlogSpecialistProps {
  specialist: BlogSpecialistDTO
}

const BlogSpecialist = ({ specialist }: IBlogSpecialistProps) => {
  return (
    <div className={classes.container}>
      <div className={classes.containercardimg}>
        <div className={classes.cardimg}>
          <img className={classes.img} src={specialist.thumbnailUrl} />
        </div>

        <div className={classes.cardcontent}>
          <p className={classes.author}>{specialist.user}</p>
          <p className={classes.dateAndTime}>{specialist.date}</p>
          <p className={classes.description}>{specialist.description}</p>
        </div>
      </div>
    </div>
  )
}
export default BlogSpecialist
