import React from 'react'

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  )
}

LogoutButton.propTypes = {
  onClick: React.PropTypes.func.isRequired,
}

export default LogoutButton
