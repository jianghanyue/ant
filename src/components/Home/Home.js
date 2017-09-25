import React, { Component } from 'react'
import './Home.css'
import LoginFrom from '../LoginFrom/LoginFrom'
import Settings from '../../Settings'
import styled from 'styled-components'

const Homewarp = styled.div`
  height: 100vh;
  padding-top: 80px;
`

class Home extends Component {
  login = (data) => {
  console.log(data)
  if (data.password !== Settings.user.password || data.username !== Settings.user.username) return
  this.props.history.push('/dashin')
}
  render () {
    return (
      <div className='home'>
        <Homewarp>
          <LoginFrom onLogin={this.login}/>
        </Homewarp>
      </div>
    )
  }
}
export default Home
