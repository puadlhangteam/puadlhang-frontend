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
    <div className="flex flex-col  items-center gap-10 md:flex-row w-full">
      <Model data={data} setData={setData} />

      <div>
        {data.length == 0 ? (
          <div></div>
        ) : (
          <div className="flex flex-wrap gap-3 bg-orange-500 p-8 rounded-xl border text-white text-lg m-2 mb-8">
            <>
              {data.map((v) => (
                <span key={v}>{v}</span>
              ))}
            </>
          </div>
        )}

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
