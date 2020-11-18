import React, { Component, Fragment } from 'react'
import Backdrop from '../../Backdrop/Backdrop'
import styles from './Drawer.module.css'

const links = [1, 2, 3]

export default class Drawer extends Component {
  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <a>Link {link}</a>
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
        {this.props.isOpen ? <Backdrop  onClick={this.props.onClose} /> : null}
      </Fragment>
    )
  }
}
