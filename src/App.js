import React from 'react'
// import Example1 from './components/table/Example1'
// import Example2 from './components/table/Example2'
// import Example3 from './components/table/Example3'
// import Example4 from './components/table/Example4'
// import Example5 from './components/table/Example5'
//import LoadingComp from './components/honeybee-test/loading-test'
import { NotFoundPage } from 'honeybee-ui'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { createBrowserHistory } from "history";


const customHistory = createBrowserHistory();

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Router history={customHistory}>
        {/* <Example2 />
        <Example3 />
        <Example4 />
        <Example5 />
        <Example1 /> */}
        <div>
        <Route component={ () => <NotFoundPage><Link className='text-white font-weight-medium' to='/404'>Take me back</Link></NotFoundPage>} />
        </div>
      </Router>
    )
  }
}
