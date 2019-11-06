import React from 'react'
import Example1 from './components/table/Example1'
import Example2 from './components/table/Example2'
import Example3 from './components/table/Example3'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className="container">
        <Example2 />
        <Example3 />
        <Example1 />
      </div>
    )
  }
}
