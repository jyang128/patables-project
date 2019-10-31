import React from 'react'
import Example from './components/table'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className="container">
        <Example />
      </div>
    )
  }
}
