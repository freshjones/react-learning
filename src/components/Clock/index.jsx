import React from 'react'

import Toggle from './../../components/Toggle'


function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>
}

FormattedDate.propTypes = {
  date: React.PropTypes.instanceOf(Date).isRequired,
}

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000,
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date(),
    })
  }

  render() {
    return (
      <div>
        <h1>Hello, bub?</h1>
        <FormattedDate date={this.state.date} />
        <Toggle />
      </div>
    )
  }
}

export default Clock
