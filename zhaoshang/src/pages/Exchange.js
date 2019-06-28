import React, { Component } from 'react';

import {Link,withRouter } from 'react-router-dom'

import { connect} from 'react-redux';//添加redux仓库

import axios from 'axios'

import '../assets/css/Exchange.css'

import Header from '../components/Header'

import Footer from '../components/Footer'

class Exchange extends Component {
    state = {
        dataTime: null,
        dataContent: [],
        sec: 0,
        timer: null
    }
    async getData() {
        const data = await axios.get('/api/rate/getfxrate')
        this.setState({
            dataTime: data.data.ctime,
            dataContent: [...data.data.data],//ES6获取数组内部数据的语法
        })
        this.props.dispatch({
            type:'GETDATA',
            data
        })
        // console.log(data)
    }
    updateData = () => {//实时更新外汇数据
        this.getData()
    }

    toMore(index){//定义编程式路由，与传参：pathname写路径与search写参数
        // clearInterval(this.state.timer)
        this.props.history.push({
            pathname: 'exchangemore',
            search:`?name=${index}`
        })
        // console.log(index)
    }

    componentDidMount() {
        this.getData()
        let timer = setInterval(() => {//每5秒发送一次数据请求，重新渲染视图层
            this.setState({
                sec: ++this.state.sec,
                timer
            })
            // console.log(this.state.sec)
            if (this.state.sec % 5 == 0) {
                // console.log('yes')
                this.getData()
            }
        }, 1000)
        this.props.dispatch({
            type:'CHANGEHEADER',
            headerComponent:'otherPage',
        })
    }

    componentWillUnmount() {
        clearInterval(this.state.timer)
    }

    render() {
        return (
            <div id="app">
                <Header/>
                <div className="mobile-body" style={{ minHeight: '436px' }}>
                    <h1>外汇实时汇率</h1>
                    <div className="ui-list rate-list">
                        <div className="ui-list-bar">
                            <div className="rate-list-time">{this.state.dataTime}</div>
                            <div className="arrow-fresh icon-arrow" onClick={this.updateData}></div>
                        </div>
                        <hr />
                        <div className="list-double-head">
                            <table width="100%">
                                <tbody>
                                    <tr>
                                        <td className="col-4">类别</td>
                                        <td className="col-5 text-right">卖出价</td>
                                        <td className="col-4 text-right pdl-15">现汇买入价</td>
                                        <td className="col-width-30 text-right pdl-10 ">
                                            <div className="adjust-right">现钞买入价</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <hr />
                        <div className="ui-list-body">
                            {
                                (this.state.dataContent).map((item, index) => {
                                    // console.log(this)
                                    return (
                                        <a  onClick={this.toMore.bind(this,index)} key={index} href="javascript:;" className="static box-flex free-item free-item-border">
                                            <div className="col-4">{item.ZCcyNbr}</div>
                                            <div className="col-5 text-right">{item.ZRtcOfr}</div>
                                            <div className="col-4 text-right">{item.ZRthBid}</div>
                                            <div className="col-width-30  text-right">
                                                <div className="inline-block">{item.ZRtcBid}</div>
                                                <div className="inline-block arrow-right"></div>
                                            </div>
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default withRouter(connect((state) => {
    return state
})(Exchange))