import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
  children: React.ReactNode
  location: string
}

const ActionButton = ({ children, location }: Props) => {
  return (
    <div>
      <AnchorLink href={`#${location}`}>{children}</AnchorLink>
    </div>
  )
}
export default ActionButton
