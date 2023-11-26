import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import classes from '../introWeb/Introweb.module.css'

type Props = {
  children: React.ReactNode
  location: string
}

const ActionButton = ({ children, location }: Props) => {
  return (
    <div className={classes.buttonforCreated}>
      <AnchorLink href={`#${location}`}>{children}</AnchorLink>
    </div>
  )
}
export default ActionButton
