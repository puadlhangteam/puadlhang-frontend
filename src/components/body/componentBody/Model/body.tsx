import { useState } from 'react'
import Model from './Model'
import { Muscle } from './Model.type'

export default function Body() {
  const [data, setData] = useState<Muscle[]>([])

  return (
    <div>
      <Model setData={setData} />
      <ul>
        {data.map((v) => (
          <li key={v}>{v}</li>
        ))}
      </ul>
    </div>
  )
}
