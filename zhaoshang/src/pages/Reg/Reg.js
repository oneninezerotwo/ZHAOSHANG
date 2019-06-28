import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import './Reg.css';
// import './Switch.css';
export default connect((state) => {
    return state
})(class Reg extends Component {

    state = {
        bool: !0,
        textValue: '',
        passwordValue: '',
        sum: '',
        text01: '',
        text02: '',
        text03: ''
    }
    getTextValue(e) {
        // this.refs.input.focus();
        console.log(e.target.value)
        let textValue = e.target.value;

        this.props.dispatch({
            type: "GETINPUTVALUE",
            textValue
        });
        this.setState({
            textValue
        });

    }
    getText(e) {
        // console.log(1231)
        let textValue = e.target.value;
        // console.log(textValue)

        let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        // console.log(reg.textValue)
        if (reg.test(textValue) == false) {
            alert("您输入的身份证格式不对");
            return false
        } else {
            this.setState({
                text01: true
            })

        };


    }
    tologin() {

        this.gettttp()
        if (this.state.text01 && this.state.text02 && this.state.text03) {
            localStorage.setItem('rems', JSON.stringify({ name: this.state.textValue, psw: this.state.passwordValue }))
            alert("注册成功")
            this.props.history.push('login')
            // console.log(123)
        } else {
            // console.log(456)
        }

    }
    getPasswordValue(e) {
        // this.refs.input.focus();
        console.log(e.target.value)
        let passwordValue = e.target.value;

        this.props.dispatch({
            type: "GETINPUTVALUE",
            passwordValue
        })
        this.setState({
            passwordValue
        })
    }
    getPassword(e) {
        let passwordValue = e.target.value;
        console.log(passwordValue)

        let reg = /^[0-9]*$/;
        // console.log(reg.textValue)
        if (reg.test(passwordValue) == false || passwordValue.length != 6) {
            alert("您输入的密码格式不对");
            return false
        } else {
            this.setState({
                text02: true
            })

        }
    }
    runnum() {
        let num = ''
        for (let i = 0; i < 4; i++) {
            let rem = parseInt(Math.random() * 10)
            num += rem
        }
        this.setState({
            sum: num
        })
    }
    gettttp() {
        let rew = this.refs.tttp.value
        if (rew == this.state.sum) {
            this.setState({
                text03: true
            })
        } else {
            alert('验证码错误')
        }
    }
    render() {
        console.log(this)
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
                    <div id="LoginTab">
                        <table id="TabTitle">
                            <tbody><tr>
                                <td >
                                    <table>
                                        <tbody><tr>
                                            <td className="left out">
                                                一卡通
                                        </td>
                                        </tr>
                                        </tbody></table>
                                </td>
                                <td>
                                    <table>
                                        <tbody><tr>
                                            <td className="mid on">
                                                信用卡
                                        </td>
                                        </tr>
                                        </tbody></table>
                                </td>
                                <td >
                                    <table>
                                        <tbody><tr>
                                            <td className="right out">
                                                一网通
                                        </td>
                                        </tr>
                                        </tbody></table>
                                </td>
                            </tr>
                            </tbody></table>
                    </div>
                </div>
                <div id="InputBlock">
                    <div id="InputInfoTable">
                        <div className="line5px"></div>
                        <table className="InputLine">
                            <tbody>
                                <tr>
                                    <td className="left" align="right">
                                        <table className="AutoAlignLabel">
                                            <tbody><tr>
                                                <td className="BeginWord">登</td>
                                                <td className="MidWord">录</td>
                                                <td className="MidWord">类</td>
                                                <td className="EndWord">别</td>
                                            </tr>
                                            </tbody></table>
                                    </td>
                                    <td className="right" align="left">
                                        <select name="IDTypeC" id="IDTypeC" className="NoneInput90" >
                                            <option value="01">身份证</option>
                                            <option value="02">护照</option>
                                            <option value="03">其它证件</option>
                                            <option value="04">信用卡卡号</option>
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="line0px"></div>
                        <table id="LgByPidInput" className="InputLine" >
                            <tbody>
                                <tr>
                                    <td className="left" align="right">
                                        <table className="AutoAlignLabel">
                                            <tbody><tr>
                                                <td className="BeginWord">证</td>
                                                <td className="MidWord">件</td>
                                                <td className="MidWord">号</td>
                                                <td className="EndWord">码</td>
                                            </tr>
                                            </tbody></table>
                                    </td>

                                    <td className="right" align="left">
                                        <input value={this.state.textValue}
                                            onChange={this.getTextValue.bind(this)} onBlur={this.getText.bind(this)}
                                            name="DIDNoC" type="text" id="DIDNoC" maxLength="20" className="NoneInput90"
                                            placeholder="请输入证件号码"
                                            style={{ display: 'inline' }} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="line0px"></div>
                        <table className="InputLine">
                            <tbody>
                                <tr>
                                    <td className="left" align="right">
                                        <table className="AutoAlignLabel">
                                            <tbody><tr>
                                                <td className="BeginWord">设</td>
                                                <td className="MidWord">置</td>
                                                <td className="MidWord">密</td>
                                                <td className="EndWord">码</td>
                                            </tr>
                                            </tbody></table>
                                    </td>
                                    <td className="right" align="left">
                                        <input value={this.state.passwordValue}
                                            onChange={this.getPasswordValue.bind(this)} onBlur={this.getPassword.bind(this)}
                                            id="PwdC" type="password" maxLength="6" className="NoneInput90" pattern="[0-9]*" placeholder="请设置密码"
                                            style={{ display: 'inline' }} />

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="line0px"></div>
                        <table className="InputLine">
                            <tbody>
                                <tr>
                                    <td className="left" align="right">
                                        <table className="AutoAlignLabel">
                                            <tbody><tr>
                                                <td className="BeginWord">验</td>
                                                <td className="MidWord">证</td>
                                                <td className="EndWord">码</td>
                                            </tr>
                                            </tbody></table>
                                    </td>
                                    <td className="right" style={{ width: '190px' }} align="left">
                                        <input ref='tttp'
                                            // onBlur={this.gettttp.bind(this)}
                                            type="text" id="ExtraPwdC" maxLength="4" className="NoneInput90" pattern="[0-9]*" placeholder="点击验证码可刷新" style={{ display: 'inline' }} />

                                    </td>
                                    <td className="right_1" align="left" onClick={this.runnum.bind(this)}>
                                        {this.state.sum}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="line0px"></div>
                        <table className="InputLine">
                            <tbody>
                                <tr>
                                    <td className="left" align="right">
                                        <table className="AutoAlignLabel" id="RememberID" style={{ display: 'inline' }}>
                                            <tbody><tr>
                                                <td className="BeginWord">记</td>
                                                <td className="MidWord">住</td>
                                                <td className="MidWord">证</td>
                                                <td className="MidWord">件</td>
                                                <td className="EndWord">号</td>
                                            </tr>
                                            </tbody></table>
                                        <table className="AutoAlignLabel" id="RememberCardNum" style={{ display: 'none' }}>
                                            <tbody><tr>
                                                <td className="BeginWord">记</td>
                                                <td className="MidWord">住</td>
                                                <td className="MidWord">卡</td>
                                                <td className="EndWord">号</td>
                                            </tr>
                                            </tbody></table>
                                    </td>
                                    <td className="right" align="right">
                                        <label className="switch">
                                            <input name="cbRemember" type="checkbox" id="cbRemember" className="switch_input" />
                                            <em></em>
                                        </label>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="line10px"></div>

                    </div>
                    <div id="LoginBar">
                        <table id="LoginBtn" >
                            <tbody>
                                <tr>
                                    <td>
                                        <a onClick={this.tologin.bind(this)}>注册</a>
                                        {/* <Link  to={{
                                            pathname: '/login'
                                        }}>注册</Link> */}
                                    </td>
                                </tr>
                            </tbody></table>
                    </div>
                </div>
                <div className="HorizontalDiv"></div>


                <div id="BusinessTool">
                    <table id="Tool" >
                        <tbody><tr>
                            <td className="left">
                            </td>
                            <td className="mid">
                                业务助手 <span>&gt;</span>
                            </td>
                            <td className="right">
                            </td>
                        </tr>
                        </tbody></table>
                </div>
                <div className="HorizontalDiv"></div>
                <div>
                    <img alt="" src="https://html.m.cmbchina.com/MobileHtml/Base/doc/images/loginc_app_banner.jpg" width="100%" />
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.runnum()
    }

})