import React, { Component } from 'react'
import './Dashin.css'
import styled from 'styled-components'
import { Menu, Icon } from 'antd'
import Luyou from '../Luyou/Luyou'
import { withRouter } from 'react-router-dom'
import store from '../../redux/store'
const SubMenu = Menu.SubMenu


const Aside = styled.div`
  background: #fff;
  color: #212121;
  width: 200px;
  z-index: 4;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Shu = styled.div`
  height: 64px;
  line-height: 64px;
  padding-left: 24px;
  font-size: 1rem;
  font-weight: 700;
  background-color: #ececec;
  flex-shrink: 0;
`

const Main = styled.div`
  flex-grow:1
`
const Down = styled.div`
  background-color: #ececec;
  box-sizing: border-box;
  color: #212121;
  font-size: .9rem;
  height: 56px;
  line-height: 56px;
  flex-shrink: 0;
  display: flex;
  `
const Dengchu = styled.div`
  cursor: pointer;
  font-size: 1rem;
  text-align: center;
  color: #fff;
  width: 60px;
  line-height: 56px;
  background-color: #ff8a00
`
const Admin = styled.div`
  font-size: 1rem;
  padding-left: 8px;
  -webkit-flex-grow: 1;
  -ms-flex-grow: 1;
  flex-grow: 1;
  overflow: hidden
`

class Dashin extends Component {
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
 state = {
   openKeys: ['sub1'],
   selectedKeys:[]
 };
 onOpenChange = (openKeys) => {
   const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
   if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
     this.setState({ openKeys });
   } else {
     this.setState({
       openKeys: latestOpenKey ? [latestOpenKey] : [],
     });
   }
 }
 logOut = () => {
   window.localStorage.removeItem('UserId')
   this.props.history.push('/')
 }
 handeleClick = (e) => {
   this.props.history.push(e.key)
   const path = e.key
   store.dispatch({ type: 'UPDATA_SELECTED_KEYS', path })
   console.log("sadas", store.getState().selectedKeys);
   console.log(path);
 }

 componentDidMount = () => {
   console.log(store.getState())
   const path = this.props.history.location.pathname
   store.dispatch({ type: 'LOAD_SELECTED_KEYS', path })
    this.setState({
      selectedKeys: store.getState().selectedKeys
    })
 }
  render () {
    console.log();
    return (
      <div className='dashin'>
        <Aside>
          <Shu>吮指后台</Shu>
          <Main>
            <Menu
              mode="inline"
              defaultOpenKeys={['dishes', 'orders']}
              style={{ width: 200 }}
              selectedKeys={store.getState().selectedKeys}
              onClick={
                this.handeleClick
              }
            >
              <SubMenu key="orders" title={<span><Icon type="file" /><span>订单管理</span></span>}>
                <Menu.Item key="/dashin">待发货</Menu.Item>
                <Menu.Item key="/dashin/completeder">已完成</Menu.Item>
              </SubMenu>
              <SubMenu key="dishes" title={<span><Icon type="file" /><span>甜点管理</span></span>}>
                <Menu.Item key="/dashin/dashes">所有甜点</Menu.Item>
                <Menu.Item key="/dashin/dashes/new">新建甜点</Menu.Item>
              </SubMenu>
            </Menu>
          </Main>
          <Down>
            <Dengchu
              onClick={this.logOut}>
              登出
            </Dengchu>
            <Admin>
              admin
            </Admin>
          </Down>
        </Aside>
        <Luyou />
      </div>
    )
  }
}
export default withRouter(Dashin)
