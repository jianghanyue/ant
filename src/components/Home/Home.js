import React, { Component } from 'react'
import './Home.css'
import LoginFrom from '../LoginFrom/LoginFrom'
import Settings from '../../Settings'
import styled from 'styled-components'
import { message } from 'antd'

const Homewarp = styled.div`
  height: 100vh;
  padding-top: 80px;
`

class Home extends Component {
  login = (data) => {
  console.log(data)
  if (data.password !== Settings.user.password || data.username !== Settings.user.username)
  {
    message.error('用户名或密码错误',2)
    return
  }
  window.localStorage.setItem('UserId', Settings.user.UserId)
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
