import { MouseEvent, useState } from 'react'
import Model from './Model'
import classes from './Model.module.css'
import { Muscle } from './Model.type'

export default function Body() {
  const [data, setData] = useState<Muscle[]>(JSON.parse(localStorage.getItem('selectedBodyPart') || '[]') as Muscle[])

  const onHandleSubmit = (e: MouseEvent) => {
    e.preventDefault()
    if (!data) return
    localStorage.setItem('selectedBodyPart', JSON.stringify(data))
  }

  return (
    <div className={classes.board}>
      <Model data={data} setData={setData} />
      <div className={classes.boardtext}>
        <div className={classes.Created}>
          <ul>
            {data.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </div>

        {/*BUTTON */}
        <div>
          <button className={classes.buttonforCreated} onClick={onHandleSubmit}>
            ยืนยัน
          </button>

          <button className={classes.buttonforskip}>ไม่ทราบ</button>
        </div>
      </div>
    </div>
  )
}
