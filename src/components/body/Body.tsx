import MuscledataFront from '../../assets/icons/home/bodymian.svg'
import classes from './Body.module.css'

const Body = () => {
  return (
    <section id="body" className={classes.container}>
      <div className={classes.formcontainer}>
        <div>
          <p className={classes.title}>เลือกบริเวณที่คุณปวด</p>
        </div>
        <div className={classes.containerbody}>
          <div>
            <img src={MuscledataFront} alt="bodyfront" />
          </div>
          <div>
            <img src={MuscledataFront} alt="bodyback" />
          </div>
          <div className={classes.containerbutton}>
            <button className={classes.buttonforCreated}>ยืนยัน</button>
            <button className={classes.buttonforskip}>ไม่ทราบ</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Body
