import React from 'react';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom'

class Header extends React.Component {

    state = {
        firstShowLoginBox: false,
        loginBtn: false,
        outsideLoginBoxAppearence:false
    }

    goBack = () => {
        window.history.back()
    }
    


    loginBtn = () => {
        this.setState({
            loginBtn: !this.state.loginBtn,
            firstShowLoginBox:true
        })
    }

    headerComponentLeft = (mes) => {
        switch (mes) {
            case 'home':
                return <a data-v-1257fb92="" className="icons icons-list"></a>
            case 'otherPage':
                return <a className="icons icons-3" onClick={this.goBack}></a>
        }
    }

    headerComponentRight = (mes) => {
        switch (mes) {
            case 'home':
                return <a data-v-1257fb92="" className="icons icons-dots" onClick={this.loginBtn}></a>
            case 'otherPage':
                return <a href="javascript:;" className="icons icons-2"></a>
        }
    }

    componentDidMount() {

    }

    render = () => {
        console.log(this)
        return (
            <div style={{ position: 'absolute', top: '0px', width: '100%', zIndex: 9999 }}>
                <div className="mobile-header" style={{ position: 'relative', zIndex: '999' }}>
                    <a href="javascript:;" className="icons icons-1 logo"></a>
                    <div className="return-link">
                        {/* <a className="icons icons-3" onClick={this.goBack}></a> */}
                        {this.headerComponentLeft(this.props.headerComponent)}
                    </div>
                    <div className="home-link">
                        {this.headerComponentRight(this.props.headerComponent)}
                        {/* <a href="javascript:;" className="icons icons-2"></a> */}
                    </div>
                </div>
                {
                    this.state.firstShowLoginBox?   <div ref="outsideLoginBox" style={{ position: 'relative', zIndex: '1' }} id="tab-bar-own" className={this.props.headerComponent==='home'&&this.state.loginBtn?'tab-dots tab-bar text-left slideInDown animated':'tab-dots tab-bar text-left slideOutUp animated'} >
                    <div data-v-1257fb92="" className="tab-bar-item ">
                        <div data-v-1257fb92="" className="tab-toggle"><a data-v-1257fb92="">
                            <div data-v-1257fb92="" className="icons icons-cellphone icons-com"></div>手机银行
					</a>
                        </div>
                        <div data-v-1257fb92="" className="" data-old-padding-top="" data-old-padding-bottom="" data-old-overflow="">
                            <ul data-v-1257fb92="">
                                <li data-v-1257fb92="">
                                    <Link to={{
                                        pathname: '/reg'
                                    }} data-v-1257fb92="" cname="导航栏手机银行" oname="手机银行登录(网页版)" otype="文字">手机银行注册（网页版）
                    </Link>
                                </li>
                                <li data-v-1257fb92="">
                                    <Link to={{
                                        pathname: '/login'
                                    }} data-v-1257fb92="" cname="导航栏手机银行" oname="手机银行(iPhone版)" otype="文字">手机银行登录（网页版）</Link>
                                </li>
                                <li data-v-1257fb92="">
                                    <a data-v-1257fb92="" href="http://m.cmbchina.com/Common/SoftwareDetail.aspx?pageid=android" cname="导航栏手机银行" oname="手机银行(Android版)" otype="文字">手机银行（Android版）</a>
                                </li>
                                <li data-v-1257fb92="">
                                    <a data-v-1257fb92="" href="https://ubank.cmbchina.com/htmllogin.jsp" cname="导航栏手机银行" oname="企业手机银行登录" otype="文字">企业手机银行登录</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div data-v-1257fb92="" className="tab-bar-item">
                        <div data-v-1257fb92="" id="service-hotline" className="tab-single">
                            <a data-v-1257fb92="" href="http://m.cmbchina.com/Common/ServiceHotLines.aspx" cname="导航栏" oname="服务热线" otype="文字">
                                <div data-v-1257fb92="" className="icons icons-phone icons-com"></div>95555
					</a>
                        </div>
                    </div>
                </div>:''
                }
             
                {/* <div data-v-1257fb92="" className="mobile-header">
                    <a data-v-1257fb92="" href="javascript:;" className="icons icons-1 logo"></a>
                    <div data-v-1257fb92="" className="return-link">
                        <a data-v-1257fb92="" className="icons icons-list"></a>
                    </div>
                    <div data-v-1257fb92="" className="home-link">
                        <a data-v-1257fb92="" className="icons icons-dots"></a>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default connect((state) => {
    return state
})(Header)