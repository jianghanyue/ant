import React, { Component } from 'react'
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'
import Dashin from '../Dashin/Dashin'
import Completed from '../Completed/Completed'
import Dashes from '../Dashes/Dashes'
import New from '../New/New'
import './Luyou.css'

class Luyou extends Component {
  render () {
    return (
      <Router>
        <div className="luyou">
          <div></div>
          <Route path='/dashin/completed' component={Completed} />
          <Route exact path='/dashin/dashes' component={Dashes} />
          <Route path='/dashin/dashes/new' component={New} />
        </div>
      </Router>
    )
  }
}
export default Luyou
