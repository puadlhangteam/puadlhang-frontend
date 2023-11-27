import { useState } from 'react'
import Model from './Model'
import { Muscle } from './Model.type'
import classes from './Model.module.css'

export default function Body() {
  const [data, setData] = useState<Muscle[]>([])

  return (
    <div className={classes.board}>
      <Model setData={setData} />
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
          <button className={classes.buttonforCreated}>ยืนยัน</button>

          <button className={classes.buttonforskip}>ไม่ทราบ</button>
        </div>
      </div>
    </div>
  )
}
