import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import Backdrop from '../../Backdrop/Backdrop'
import styles from './Drawer.module.css'

export default class Drawer extends Component {
  clickHandler = () => {
    this.props.onClose()
  }

  renderLinks(links) {
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

    const links = [{ to: '/', label: 'List', exact: true }]

    if (this.props.isAuthenticated) {
      links.push({ to: '/quiz-creator', label: 'Create Quiz', exact: false })
      links.push({ to: '/logout', label: 'Logout', exact: false })
    } else {
      links.push({ to: '/auth', label: 'Authorization', exact: false })
    }

    return (
      <Fragment>
        <nav className={stl.join(' ')}>
          <ul>{this.renderLinks(links)}</ul>
        </nav>
        {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
      </Fragment>
    )
  }
}
