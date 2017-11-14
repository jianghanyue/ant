import React, { Component } from 'react'
import { Table, message } from 'antd';
import styled from 'styled-components'
import {
  Link
} from 'react-router-dom'
import axios from 'axios'

const Tablec =styled.div`
  margin:24px;
`
const Poster = styled.img`
  width: 40px;
`

class Dashes extends Component {
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
     message.error('删除成功')
     console.log(id);
     e.preventDefault()
     axios.delete(`http://localhost:3012/data/${id}`)
      .then(
        res => {
          this.setState({
            data:this.state.data.filter(t => t.id !== id)
          })
        }
      )
   }
  render () {
const columns = [{
  title: '海报',
  dataIndex: 'poster',
  key: 'poster',
  render: (text) =>
  <Poster src={text} alt='poster' />
}, {
  title: '菜品名称',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '描述',
  dataIndex: 'address',
  key: 'address',
}, {
  title: '价格',
  dataIndex: 'jiage',
  key: 'jiage',
},{
  title: '操作',
  dataIndex:'id',
  key: 'id',
  render: (id) => (
      <Link to='' onClick={(e)=>this.handleonClick(e,id)}>删除</Link>
  ),
}]
    return (
      <div className='dashes'>
        <Tablec>
          共0条
          <Table columns={columns} dataSource={this.state.data} pagination='true' total='5' rowKey={record => record.id}/>
        </Tablec>
      </div>
    )
  }
}
export default Dashes
