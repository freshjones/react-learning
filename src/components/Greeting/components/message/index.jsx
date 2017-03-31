import React from 'react'

function UserGreeting() {
  return <h1>Welcome back!</h1>
}

function GuestGreeting() {
  return <h1>Please sign up.</h1>
}

function Message(props) {
  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}

Message.propTypes = {
  isLoggedIn: React.PropTypes.bool.isRequired,
}

export default Message
