import React from 'react'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center py-4">
            Hello World
          </div>
        </div>
      </div>
    )
  }
}
