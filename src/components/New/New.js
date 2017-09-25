import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';
import styled from 'styled-components'
const FormItem = Form.Item;

const StyledButton = styled(Button)`
  width: 88px;
`

class New extends Component {
  state = {
    shangpinming:'',
    miaoshu:'',
    jiage:''
  }
  handleUsernameChange = (e) => {
    this.setState({
      shangpinming:e.target.value
    })
  }
  handlePasswordChange = (e) => {
    this.setState({
      miaoshu:e.target.value
    })
  }
  handlejiageChange = (e) => {
    this.setState({
      jiage:e.target.value
    })
  }
  render () {
    return (
      <div className='new'>
        <Form>
          <div className="news">
            <Button
              htmlType="submit"
              icon='upload'
            >
              上传海报
            </Button>
            <FormItem>
              <Input
                value={this.state.shangpinming}
                onChange={this.handleUsernameChange}
                prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="名称" />
            </FormItem>
            <FormItem>
              <Input
                value={this.state.miaoshu}
                onChange={this.handlePasswordChange}
                prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="描述" />
            </FormItem>
            <FormItem>
              <Input
                value={this.state.jiage}
                onChange={this.handlejiageChange}
                prefix={<Icon type="pay-circle-o" style={{ fontSize: 13 }} />} type="password" placeholder="价格" />
            </FormItem>
            <div className="but">
              <FormItem>
                <StyledButton
                  type="primary"
                  htmlType="submit"
                >
                  添加甜点
                </StyledButton>
              </FormItem>
            </div>
          </div>
        </Form>
      </div>
    )
  }
}
export default New
