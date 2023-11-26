import { useState } from 'react'
import Model from './Model'
import { Muscle } from './Model.type'
import classes from './Model.module.css'

export default function Body() {
  const [data, setData] = useState<Muscle[]>([])

  return (
    <div className={classes.Bodyboard}>
      <Model setData={setData} />
      <div className={classes.Created}>
        <ul>
          {data.map((v) => (
            <li key={v}>{v}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
