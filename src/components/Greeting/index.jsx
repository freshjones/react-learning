import React from 'react'

import LoginButton from './components/buttons/login'
import LogoutButton from './components/buttons/logout'
import Message from './components/message'

class Greeting extends React.Component {

  constructor(props) {
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.state = {
      isLoggedIn: false,
    }
  }

  handleLoginClick() {
    this.setState({
      isLoggedIn: true,
    })
  }

  handleLogoutClick() {
    this.setState({
      isLoggedIn: false,
    })
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn

    let button = null
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }

    return (
      <div>
        <Message isLoggedIn={isLoggedIn} />
        {button}
      </div>
    )
  }
}

export default Greeting
