import { MouseEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Model from './Model'
import classes from './Model.module.css'
import { Muscle } from './Model.type'

export default function Body() {
  const [data, setData] = useState<Muscle[]>(JSON.parse(localStorage.getItem('selectedBodyPart') || '[]') as Muscle[])
  const navigate = useNavigate()

  const onHandleSubmit = (e: MouseEvent) => {
    e.preventDefault()
    if (!data) return
    localStorage.setItem('selectedBodyPart', JSON.stringify(data))
    navigate('/solutions')
  }
  const onHandleClear = (e: MouseEvent) => {
    e.preventDefault()
    localStorage.setItem('selectedBodyPart', JSON.stringify([]))
    setData([])
  }

  return (
    <div className={classes.board}>
      <div className="flex gap-4">
        <Model data={data} setData={setData} />
      </div>
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

          <button className={classes.buttonforskip} onClick={onHandleClear}>
            ล้าง
          </button>
        </div>
      </div>
    </div>
  )
}
