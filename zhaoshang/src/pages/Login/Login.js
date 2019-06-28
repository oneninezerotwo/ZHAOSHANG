import React from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import './Rege.css';
import './Switche.css'
class Login extends React.Component {
  state = {

  }

  render() {
    return (
      <div id="Main">
        <div id="TitleBar">
          <Link to={{
            pathname: '/'
          }}>
            <div id="LogoBg_Topbar">
              <div id="Logo">
              </div>
            </div>
          </Link>
        </div>
        <div className="bg">
          <div className="wel">用户登录</div>
          <div className="user">
            <div id="yonghu" style={{}}>用户名
            </div>
            <input  ref='ppps'  type="text" name="用户" placeholder="admin" />
          </div>
          <div className="password">
            <div id="yonghu">密&nbsp;&nbsp;&nbsp;码</div>
            <input ref='pppz' className="" type="password" name="密码" placeholder="......" />
          </div>
          <div className="rem">
            <input    type="checkbox" name="" id="" placeholder="" />
            <div id="reb">
              记住密码
	        	 </div>
          </div>
          <div className="fg">
            <div style={{ fontSize: '11px', marginTop: '11px' }}>
              <a style={{ fontSize: '11px' }} href="#">忘记密码？</a>
            </div>
          </div>
          <a>
            <input onClick={this.logins.bind(this)} className="btn" type="button" name="登录" value="登录" />
          </a>
        </div>
      </div>
    )
  }
  logins(){
    let name = JSON.parse(localStorage.getItem('rems'))
    console.log(this.refs.pppz.value,name.psw)
    if((this.refs.ppps.value == name.name) && (this.refs.pppz.value == name.psw)){
      this.props.history.push('/')
    }else{
      alert('账号或密码不正确')
    }
  }
}

export default connect((state) => {
  return state
})(Login)