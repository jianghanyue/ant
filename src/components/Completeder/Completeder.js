import React, { Component } from 'react'
import { Table, message } from 'antd';
import styled from 'styled-components'
import axios from 'axios'

const Tablec =styled.div`
  margin:24px;
`


class Completed extends Component {
  state = {
    data:[]
  }
  componentDidMount = () => {
   axios.get('http://localhost:3012/data').then(res => {
     this.setState({
       data:res.data
     })
   })
 }
  handleonClick = (e,id) => {
    message.error('发货成功')
    console.log(id);
    e.preventDefault()
    const data = { ...this.state.data.find(t => t.id ===id ),completed: true}
    axios.put(`http://localhost:3012/data/${id}`,data)
     .then(
       res => {
         this.setState({
           data:this.state.data.map(t => {
             if(t.id === id){
               return {...t,completed:true}
             }
             return t
           })
         })
       }
     )
  }
  render () {
const columns = [{
  title: '菜品名称',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="jiavascript:;">{text}</a>,
}, {
  title: '下单时间',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '顾客名',
  dataIndex: 'address',
  key: 'address',
}, {
  title: '操作',
  dataIndex:'id',
  key: 'id',
  render: (id) => (
    <span>
      <span>√</span>
    </span>
  ),
}];

const data = this.state.data.filter( t => t.completed === true)
    return (
      <div className='completed'>
        <Tablec>
          共2条订单
          <Table columns={columns} dataSource={data} rowKey={row => row.id}/>
        </Tablec>
      </div>
    )
  }
}
export default Completed
