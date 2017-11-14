import React, { Component } from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import Completed from '../Completed/Completed'
import Completeder from '../Completeder/Completeder'
import Dashes from '../Dashes/Dashes'
import New from '../New/New'
import NotFound from './NotFound'
import './Luyou.css'


class Luyou extends Component {
  render () {
    return (
        <div className="luyou">
          <div></div>
          <Switch>
            <Route exact path='/dashin' component={Completed} />
            <Route path='/dashin/completeder' component={Completeder} />
            <Route path='/dashin/dashes/new' component={New} />
            <Route path='/dashin/dashes' component={Dashes} />
            <Route component={NotFound} />
          </Switch>
        </div>
    )
  }
}
export default Luyou
