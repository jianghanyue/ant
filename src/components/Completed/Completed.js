import React, { Component } from 'react'
import './Completed.css'
import { Table, Icon } from 'antd';
import styled from 'styled-components'

const Tablec =styled.div`
  margin:24px;
`

class Completed extends Component {
  render () {
const columns = [{
  title: '菜品名称',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="#">{text}</a>,
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
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="#">操作</a>
    </span>
  ),
}];

const data = [{
  key: '1',
  name: '黑森林',
  age: '2017-09-24 17:36:00',
  address: 'happypeter',
}, {
  key: '2',
  name: '提拉米苏',
  age: 	'2017-09-24 17:36:00',
  address: '	billie',
}];
    return (
      <div className='completed'>
        <Tablec>
          共2条订单
          <Table columns={columns} dataSource={data} />
        </Tablec>
      </div>
    )
  }
}
export default Completed
