import React from 'react'
import axios from 'axios'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activity: ''
    }
  }
  componentDidMount() {
    axios.get('http://www.boredapi.com/api/activity/')
      .then(response => {
        console.log(response)
        this.setState({ activity: response.data.activity })
      })
      .catch(err => console.error(err))
  }
  render() {
    const { activity } = this.state
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center py-4">
            {activity}
          </div>
        </div>
      </div>
    )
  }
}
