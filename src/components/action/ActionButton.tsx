import React from 'react'

type Props = {
  children: React.ReactNode
  location: string
}

const ActionButton = ({ children, location }: Props) => {
  return (
    <div>
      <a href={`#${location}`}>{children}</a>
    </div>
  )
}
export default ActionButton
