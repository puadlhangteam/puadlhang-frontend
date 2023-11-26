import { useEffect, useState } from 'react'
import { Muscle } from './Model.type'
import { ISVGModelData, anteriorData, posteriorData } from './svg.data'
import classes from './Model.module.css'

interface IModelProp {
  setData?: (data: Muscle[]) => void
  Front?: boolean
  Back?: boolean
}

export default function Model({ setData, Front = true, Back = true }: IModelProp) {
  const [MuscledataFront, setMuscledataFront] = useState<ISVGModelData[]>(anteriorData)

  const [MuscledataBack, setMuscledataBack] = useState<ISVGModelData[]>(posteriorData)

  const toggle = (components: ISVGModelData) => {
    components.selected = !components.selected
    return components
  }

  useEffect(() => {
    const getData = () => {
      return [...MuscledataFront, ...MuscledataBack]
        .filter((v) => v.selected)
        .filter((v, i, self) => i === self.map((v) => v.muscle).indexOf(v.muscle))
        .map((v) => v.muscle)
    }
    const data = getData()

    setData && setData(data)
  }, [MuscledataFront, MuscledataBack, setData])

  const onClickBodyPart = (e: React.MouseEvent) => {
    e.preventDefault()

    const selectedMuscle = e.currentTarget.getAttribute('name') as Muscle

    setMuscledataFront(MuscledataFront.map((v) => (v.muscle === selectedMuscle ? toggle(v) : v)))
    setMuscledataBack(MuscledataBack.map((v) => (v.muscle === selectedMuscle ? toggle(v) : v)))
  }

  return (
    <div className={classes.Bodyboard}>
      {Front && (
        <svg viewBox="0 0 424 770" width="50%" fill="none">
          {anteriorData.map(({ components, muscle }) =>
            components.map((C) => {
              if (C.type === 'path')
                return (
                  <path
                    className={classes.selected}
                    key={C.d}
                    name={muscle}
                    d={C.d}
                    fill={C.fill}
                    stroke={C.stroke}
                    onClick={onClickBodyPart}
                  ></path>
                )
              if (C.type === 'ellipse')
                return (
                  <ellipse
                    className={classes.selected}
                    key={C.cx + C.cy}
                    name={muscle}
                    cx={C.cx}
                    cy={C.cy}
                    rx={C.rx}
                    ry={C.ry}
                    fill={C.fill}
                    stroke={C.stroke}
                    onClick={onClickBodyPart}
                  ></ellipse>
                )
            }),
          )}
        </svg>
      )}

      {Back && (
        <svg viewBox="0 0 424 770" width="50%" fill="none">
          {posteriorData.map(({ components, muscle }) =>
            components.map((C) => {
              if (C.type === 'path')
                return (
                  <path
                    className={classes.selected}
                    key={C.d}
                    name={muscle}
                    d={C.d}
                    fill={C.fill}
                    stroke={C.stroke}
                    onClick={onClickBodyPart}
                  ></path>
                )
              if (C.type === 'ellipse')
                return (
                  <ellipse
                    className={classes.selected}
                    key={C.cx}
                    name={muscle}
                    cx={C.cx}
                    cy={C.cy}
                    rx={C.rx}
                    ry={C.ry}
                    fill={C.fill}
                    stroke={C.stroke}
                    onClick={onClickBodyPart}
                  ></ellipse>
                )
            }),
          )}
        </svg>
      )}
    </div>
  )
}
