import React, { Component } from 'react'
import { Upload, message,Form, Icon, Input, Button } from 'antd';
import styled from 'styled-components'
import axios from 'axios'
import store from '../../redux/store'
const FormItem = Form.Item;

const StyledButton = styled(Button)`
  width: 88px;
`
const fileList = []

const props = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  defaultFileList: [...fileList],
}

class New extends Component {
  state = {
    poster:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2093405041,2431363609&fm=27&gp=0.jpg',
    name:'',
    address:'',
    jiage:''
  }
  handleSubmit = (e) => {
    e.preventDefault()
    let data = this.props.form.getFieldsValue()
    let unFilled = Object.keys(data).filter(
      prop => {
        return (!data[prop])
      }
    )
    if(unFilled.length === 0 ) {
      const allData = { ...data,
        poster:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2093405041,2431363609&fm=27&gp=0.jpg',
        completed:false,
        shuliang: 1,
        pinglun:[]}
      axios.post('http://localhost:3012/data',allData).then(
        res => {
          this.props.history.push('/dashin/dashes')
          store.dispatch({ type: 'UPDATA_SELECTED_KEYS', path: '/dashin/dashes'})
          console.log('UPDATE_SELECTED_KEYS 之后', store.getState());
        })
    }else {
        message.error('请填写全部信息')
  }}
  render () {
    console.log(this.props.form.getFieldsValue());
    const { getFieldDecorator } = this.props.form
    const config = {
      rules: [{ type:'string',required:true,message:'必填项目' }]
    }
    return (
      <div className='new'>
        <Form onSubmit={this.handleSubmit}>
          <div className="news">
            <Upload {...props}>
              <Button>
                <Icon type="upload" /> 点击上传
              </Button>
            </Upload>
            <FormItem>
              {getFieldDecorator('name',config)(
                <Input
                  prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="名称" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('address',config)(
                <Input
                  prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="text" placeholder="描述" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('jiage',config)(
                <Input
                  prefix={<Icon type="pay-circle-o" style={{ fontSize: 13 }} />} type="text" placeholder="价格" />
              )}
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
export default Form.create({})(New)
