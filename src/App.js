import React from 'react'
import Example1 from './components/table/Example1'
import Example2 from './components/table/Example2'
import Example3 from './components/table/Example3'
import Example4 from './components/table/Example4'
import Example5 from './components/table/Example5'


export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className="container">
        {/* <Example2 />
        <Example3 />
        <Example4 /> */}
        <Example5 />
        {/* <Example1 /> */}

      </div>
    )
  }
}
