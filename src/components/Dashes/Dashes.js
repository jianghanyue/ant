import React, { Component } from 'react'
import { Table, Icon } from 'antd';
import styled from 'styled-components'

const Tablec =styled.div`
  margin:24px;
`

class Dashes extends Component {
  render () {
const columns = [{
  title: '海报',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="#">{text}</a>,
}, {
  title: '菜品名称',
  dataIndex: 'age',
  key: 'age',
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
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="#">操作</a>
    </span>
  ),
}];

const data = [];
    return (
      <div className='dashes'>
        <Tablec>
          共0条
          <Table columns={columns} dataSource={data} />
        </Tablec>
      </div>
    )
  }
}
export default Dashes
