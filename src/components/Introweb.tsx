import Body from './Body'
import classes from './IntroWeb.module.css'

const IntroWeb = () => {
  return (
    <section className={classes.container}>
      <div className={classes.formcontainer}>
        <p className={classes.title}>ปวดตรงไหน?</p>
        <p className={classes.description}>ให้เราช่วยแนะนำคุณ</p>
        <div>
          <button className={classes.buttonforCreated} onClick={Body}>
            Start
          </button>
        </div>
      </div>
    </section>
  )
}

export default IntroWeb
