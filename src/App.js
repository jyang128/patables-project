import React from 'react'
import axios from 'axios'
import { Patables } from 'patables2.0'
import Example from './components/table'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activities: []
    }
  }
  componentDidMount() {
    axios.get('http://www.boredapi.com/api/activity/')
      .then(response => {
        console.log(response)
        this.setState(prevState => ({ activities: [response.data.activity] }))
      })
      .catch(err => console.error(err))
  }
  render() {
    const { activities } = this.state
    console.log('activities', activities)

    const renderTable = props => {
      console.log('props', props)

      return (
        <table>
          <thead>
            <tr>
              <th>Option(s)</th>
            </tr>
          </thead>
          <tbody>
            {this.state.activities.length === 0 ? (
              <tr>
                <td>Nothing!</td>
              </tr>
            ) : (
              <tr>
                <td>{props.visibleData[0]}</td>
              </tr>
            )}
          </tbody>
        </table>
      )
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center py-4">
            Activity
          </div>
          <Patables
            render={renderTable}
            initialData={activities} />

          <Example/>
        </div>
      </div>
    )
  }
}
