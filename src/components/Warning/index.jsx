import React from 'react'

function WarningBanner(props) {
  if (!props.warn) {
    return null
  }
  return (
    <div className="warning">
      Warning!
    </div>
  )
}

WarningBanner.propTypes = {
  warn: React.PropTypes.bool.isRequired,
}

export default WarningBanner
