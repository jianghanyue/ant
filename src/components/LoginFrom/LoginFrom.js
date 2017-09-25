import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';
import styled from 'styled-components'
const FormItem = Form.Item;

const StyledButton = styled(Button)`
  width: 100%;
`

class LoginFrom extends Component {
  state = {
    username:'',
    password:''
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      username:this.state.username,
      password:this.state.password
    }
    this.props.onLogin(data)
  }
  handleUsernameChange = (e) => {
    this.setState({
      username:e.target.value
    })
  }
  handlePasswordChange = (e) => {
    this.setState({
      password:e.target.value
    })
  }
  render () {
    return (
      <div className='loginFrom'>
        <Form onSubmit={this.handleSubmit}>
          <div className="inp">

            <FormItem>
              <Input
                value={this.state.username}
                onChange={this.handleUsernameChange}
                prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
            </FormItem>
            <FormItem>
              <Input
                value={this.state.password}
                onChange={this.handlePasswordChange}
                prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
            </FormItem>

            <div className="but">
              <FormItem>
                <StyledButton
                  type="primary"
                  htmlType="submit"
                >
                  登录
                </StyledButton>
              </FormItem>
            </div>
          </div>
        </Form>
      </div>
    )
  }
}
export default LoginFrom
