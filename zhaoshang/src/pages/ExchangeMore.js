import React from 'react';

import axios from 'axios';

import { connect } from 'react-redux';

import { withRouter } from "react-router-dom";

import Header from '../components/Header'

import Footer from '../components/Footer'


class ExchangeMore extends React.Component {

    state = {
        dataTime: null,
        dataContent: [],
        sec: 0,
        timer: null
    }

    async getData() {
        //console.log(this.props.location.search)//获取路由的参数
        const parame = this.props.location.search.slice(1).split('=')[1]//获取路由的参数
        // console.log(parame)
        const data = await axios.get('/api/rate/getfxrate')
        this.setState({
            dataTime: data.data.ctime,
            dataContent: [...data.data.data][parame],//ES6获取数组内部数据的语法
        })
        // console.log(this.state.dataContent)
    }

    updateData = () => {//实时更新外汇数据
        this.getData()
    }

    componentDidMount() {
        this.props.dispatch({
            type:'CHANGEHEADER',
            headerComponent:'otherPage',
        })
        this.getData()
        let timer = setInterval(() => {//每5秒发送一次数据请求，重新渲染视图层
            this.setState({
                sec: ++this.state.sec,
                timer
            })
            // console.log(this.state.sec)
            if (this.state.sec % 5 === 0) {
                // console.log('yes')
                this.getData()
            }
        }, 1000)
    }
    
    componentWillUnmount() {
        clearInterval(this.state.timer)
    }


    render() {
        return (
            <div id="app">
               <Header/>
                <div className="mobile-body" style={{minHeight: '436px'}}>
                    <h1>{this.state.dataContent.ZCcyNbr}市场行情</h1>
                    <div className="ui-list rate-list ">
                        <div className="ui-list-bar">
                            <div className="rate-list-time">{this.state.dataTime}</div>
                            <div className="arrow-fresh icon-arrow"></div>
                        </div>
                        <hr />
                        <div className="ui-list-body">
                            <div className="box-flex">
                                <div className="box-flex-1">交易币</div>
                                <div className="box-flex-1 text-right">{this.state.dataContent.ZCcyNbr}</div>
                            </div>
                            <hr className="mglr-15" />
                            <div className="box-flex">
                                <div className="box-flex-1">交易币单位</div>
                                <div className="box-flex-1 text-right">100</div>
                            </div>
                            <hr className="mglr-15" />
                            <div className="box-flex">
                                <div className="box-flex-1">基本币</div>
                                <div className="box-flex-1 text-right">人民币</div>
                            </div>
                            <hr className="mglr-15" />
                            <div className="box-flex">
                                <div className="box-flex-1">中间价</div>
                                <div className="box-flex-1 text-right">{this.state.dataContent.ZRtbBid}</div>
                            </div>
                            <hr className="mglr-15" />
                            <div className="box-flex">
                                <div className="box-flex-1">现汇卖出价</div>
                                <div className="box-flex-1 text-right">{this.state.dataContent.ZRthOfr}</div>
                            </div>
                            <hr className="mglr-15" />
                            <div className="box-flex">
                                <div className="box-flex-1">现钞卖出价</div>
                                <div className="box-flex-1 text-right">{this.state.dataContent.ZRtcOfr}</div>
                            </div>
                            <hr className="mglr-15" />
                            <div className="box-flex">
                                <div className="box-flex-1">现汇买入价</div>
                                <div className="box-flex-1 text-right">{this.state.dataContent.ZRthBid}</div>
                            </div>
                            <hr className="mglr-15" />
                            <div className="box-flex">
                                <div className="box-flex-1">现钞买入价</div>
                                <div className="box-flex-1 text-right">{this.state.dataContent.ZRtcBid}</div>
                            </div>
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
})(ExchangeMore))