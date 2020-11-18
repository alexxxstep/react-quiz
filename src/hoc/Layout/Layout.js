import React, { Component } from 'react'
import Drawer from '../../components/UI/Navigation/Drawer/Drawer'
import MenuToggle from '../../components/UI/Navigation/MenuToggle/MenuToggle'

import styles from './Layout.module.css'

class Layout extends Component {
  state = {
    menu: false,
  }

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu,
    })
  }

  menuCloseHandler = () => {
    this.setState({
      menu: false,
    })
  }

  render() {
    return (
      <div className={styles.Layout}>
        <Drawer isOpen={this.state.menu} onClose={this.menuCloseHandler} />

        <MenuToggle
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
        />
        <main>{this.props.children}</main>
      </div>
    )
  }
}

export default Layout
