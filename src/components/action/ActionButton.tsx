import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
  children: React.ReactNode
  location: string
}

const ActionButton = ({ children, location }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      href={`#${location}`}
    >
      {children}
    </AnchorLink>
  )
}
export default ActionButton
