import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import Backdrop from '../../Backdrop/Backdrop'
import styles from './Drawer.module.css'

const links = [
  { to: '/', label: 'List', exact: true },
  { to: '/auth', label: 'Authorization', exact: false },
  { to: '/quiz-creator', label: 'Create Quiz', exact: false },
]

export default class Drawer extends Component {
  clickHandler = () => {
    this.props.onClose()
  }

  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName={styles.active}
            onClick={this.clickHandler}
          >
            {link.label}
          </NavLink>
        </li>
      )
    })
  }

  render() {
    const stl = [styles.Drawer]

    if (!this.props.isOpen) {
      stl.push(styles.close)
    }

    return (
      <Fragment>
        <nav className={stl.join(' ')}>
          <ul>{this.renderLinks()}</ul>
        </nav>
        {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
      </Fragment>
    )
  }
}
