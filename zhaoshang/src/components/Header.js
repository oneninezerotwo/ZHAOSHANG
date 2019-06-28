import React from 'react';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom'

class Header extends React.Component {

    state = {
        firstShowLoginBox: false,
        loginBtn: false,
        firstShowPhoneLoginBtn:false,
        phoneLoginBtn:false,
        firstShowObjectType:false,
        objectTpyeBtn:true
    }

    goBack = () => {
        window.history.back()
    }
    


    loginBtn = () => {
        this.setState({
            loginBtn: !this.state.loginBtn,
            firstShowLoginBox:true,
            firstShowPhoneLoginBtn:false,
            phoneLoginBtn:!this.state.phoneLoginBtn,
            firstShowObjectType:false,
            objectTpyeBtn:false
        })
    }

    objectTpyeBtn=()=>{
        // console.log(123)
        this.setState({
            firstShowObjectType:true,
            objectTpyeBtn:!this.state.objectTpyeBtn,
            loginBtn: false,
            firstShowLoginBox:false,
            firstShowPhoneLoginBtn:false,
            phoneLoginBtn:false,
        })
    }

    phoneLoginBtn=()=>{
        // console.log(123)
        this.setState({
           firstShowPhoneLoginBtn:true,
           phoneLoginBtn:!this.state.phoneLoginBtn
        })
    }

    headerComponentLeft = (mes) => {
        switch (mes) {
            case 'home':
                return <a data-v-1257fb92="" className="icons icons-list" onClick={this.objectTpyeBtn}></a>
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
        // console.log(this)
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
                    this.state.firstShowLoginBox? <div ref="outsideLoginBox" style={{ position: 'relative', zIndex: '1' }} id="tab-bar-own" className={this.props.headerComponent==='home'&&this.state.loginBtn?'tab-dots tab-bar text-left slideInDown animated':'tab-dots tab-bar text-left slideOutUp animated'} style={this.props.headerComponent==='home'&&this.state.loginBtn?{display:'block'}:{display:'none'}}>
                    <div data-v-1257fb92="" className="tab-bar-item " style={{position:'relative'}}>
                        <div data-v-1257fb92="" className="tab-toggle" onClick={this.phoneLoginBtn}  style={{position:'abosulte',top:0,zIndex:9999}}>
                        <a data-v-1257fb92="">
                            <div data-v-1257fb92="" className="icons icons-cellphone icons-com"></div>手机银行
					</a>
                        </div>
                        {this.state.firstShowPhoneLoginBtn?<div style={{position:'abosulte',top:0,zIndex:999}} data-v-1257fb92="" className={this.state.phoneLoginBtn?'slideInDown animated':'slideOutUp animated'} style={this.state.phoneLoginBtn?{display:'block'}:{display:'none'}}data-old-padding-top="" data-old-padding-bottom="" data-old-overflow="">
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
                        </div>:''}
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
                {
                    this.state.firstShowObjectType? <div style={this.state.objectTpyeBtn?{display:'block'}:{display:'none'}} className={this.state.objectTpyeBtn?'slideInDown  animated tab-list clearfix':'slideOutUp animated tab-list clearfixs'} data-v-1257fb92="" data-old-padding-top="" data-old-padding-bottom=""
                    data-old-overflow="">
                    <div data-v-1257fb92=""className="tab-sec">
                        <div data-v-1257fb92="" id="J_MainTab"className="tab-menu">
                            <ul data-v-1257fb92=""className="clearfix">
                                <li data-v-1257fb92="" id="tab-menu-own"className="col-3">个人业务</li>
                                <li data-v-1257fb92="" id="tab-menu-xyk"className="col-3 active">信用卡
                                </li>
                                <li data-v-1257fb92="" id="tab-menu-today"className="col-3">今日招行</li>
                            </ul>
                        </div>
                        <div data-v-1257fb92=""className="tab-bar text-left" style={{display: 'none'}}>
                            <div data-v-1257fb92=""className="tab-bar-item">
                                <div data-v-1257fb92=""className="tab-single"><a data-v-1257fb92=""
                                        href="http://m.cmbchina.com/mfinanceweb/Financing/">
                                        <div data-v-1257fb92=""className="icons icons-24-3 icons-com"></div>理财产品
                                    </a></div>
                            </div>
                            <div data-v-1257fb92=""className="tab-bar-item">
                                <div data-v-1257fb92=""className="tab-single"><a data-v-1257fb92=""
                                        href="http://fund.cmbchina.com/CmbMFund/Pages/FundQuery.aspx">
                                        <div data-v-1257fb92=""className="icons icons-24-3 icons-com"></div>基金产品
                                    </a></div>
                            </div>
                            <div data-v-1257fb92=""className="tab-bar-item">
                                <div data-v-1257fb92=""className="tab-single"><a data-v-1257fb92=""
                                        href="http://m.cmbchina.com/mfinanceweb/Gold/GoldProduct.aspx">
                                        <div data-v-1257fb92=""className="icons icons-24-3 icons-com"></div>黄金产品
                                    </a></div>
                            </div>
                            <div data-v-1257fb92="">
                                <div data-v-1257fb92=""className="tab-bar-item ">
                                    <div data-v-1257fb92=""className="tab-toggle"><a data-v-1257fb92="">
                                            <div data-v-1257fb92=""className="icons icons-com icons-24-1"></div>最新业务产品
                                        </a></div>
                                    <div data-v-1257fb92=""  style={{display: 'none'}}>
                                        <ul data-v-1257fb92="">
                                            <li data-v-1257fb92=""><a data-v-1257fb92=""
                                                    href="http://m.cmbchina.com/Personal/ProductsDetail.aspx?id=bb32eb98-accf-4a9d-baa8-f2f98900fe06">国际收入自助申报</a>
                                            </li>
                                            <li data-v-1257fb92=""><a data-v-1257fb92=""
                                                    href="http://m.cmbchina.com/Personal/ProductsDetail.aspx?id=fdc53ab6-7046-4abe-9c05-84b46442f379">自助境外汇款业务</a>
                                            </li>
                                            <li data-v-1257fb92=""><a data-v-1257fb92=""
                                                    href="http://m.cmbchina.com/Personal/ProductsDetail.aspx?id=eff2ee49-c34d-403c-a7a8-ab0f5f14ab2f">纸黄金</a>
                                            </li>
                                            <li data-v-1257fb92=""><a data-v-1257fb92=""
                                                    href="http://m.cmbchina.com/Personal/ProductsDetail.aspx?id=c92b41b0-16d7-48d2-bf24-376b81ccd082">招财金</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-v-1257fb92="" id="list-collapse-xyk"className="tab-bar text-left">
                            <div data-v-1257fb92=""className="tab-bar-item">
                                <div data-v-1257fb92=""className="tab-single"><a data-v-1257fb92="" href="http://xyk.cmbchina.com">
                                        <div data-v-1257fb92=""className="icons icons-24-3 icons-com"></div>信用卡首页
                                    </a></div>
                            </div>
                            <div data-v-1257fb92=""className="tab-bar-item">
                                <div data-v-1257fb92=""className="tab-single"><a data-v-1257fb92=""
                                        href="http://ccclub.cmbchina.com/mca/MPreContract.aspx?WT.mc_id=N17WPGW204A9043100ZY">
                                        <div data-v-1257fb92=""className="icons icons-24-3 icons-com"></div>信用卡申请
                                    </a></div>
                            </div>
                            <div data-v-1257fb92=""className="tab-bar-item">
                                <div data-v-1257fb92=""className="tab-single"><a data-v-1257fb92=""
                                        href="http://xyk.cmbchina.com/znwkf">
                                        <div data-v-1257fb92=""className="icons icons-24-3 icons-com"></div>信用卡客服
                                    </a></div>
                            </div>
                        </div>
                        <div data-v-1257fb92="" id="list-collapse-today"className="tab-bar text-left" style={{display: 'none'}}>
                            <div data-v-1257fb92=""className="tab-bar-item">
                                <div data-v-1257fb92=""className="tab-single"><a data-v-1257fb92=""
                                        href="http://m.cmbchina.com/Notice/Default.aspx">
                                        <div data-v-1257fb92=""className="icons icons-24-3 icons-com"></div>最新公告
                                    </a></div>
                                <div data-v-1257fb92=""className="tab-single"><a data-v-1257fb92=""
                                        href="http://m.cmbchina.com/CmbInfo/CmbNews.aspx">
                                        <div data-v-1257fb92=""className="icons icons-24-3 icons-com"></div>招行新闻
                                    </a></div>
                                <div data-v-1257fb92=""className="tab-single"><a data-v-1257fb92=""
                                        href="http://m.cmbchina.com/CmbInfo/CmbAnnouncement.aspx">
                                        <div data-v-1257fb92=""className="icons icons-24-3 icons-com"></div>招行公告
                                    </a></div>
                            </div>
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