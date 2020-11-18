import React from 'react'
import styles from './MenuToggle.module.css'

const MenuToggle = (props) => {
  const stl = [styles.MenuToggle, 'material-icons']

  const iconValue = props.isOpen ? 'close' : 'dehaze'

  if (props.isOpen) {
    stl.push(styles.open)
  }

  return (
    <i className={stl.join(' ')} onClick={props.onToggle}>
      {iconValue}
    </i>
  )
}

export default MenuToggle
