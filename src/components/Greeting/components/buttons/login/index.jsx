import React from 'react'

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  )
}

LoginButton.propTypes = {
  onClick: React.PropTypes.func.isRequired,
}

export default LoginButton
