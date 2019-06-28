import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';

class ApplyLoan extends React.Component {
    state = {
        local : true,
        isCommit : true,
        ismask : false,
        title : [
            {localTitle : '有本地房产'},
            {localTitle : '有本地按揭房产'},
            {localTitle : '无本地房产'}
        ],
        cName : 'option_item_selected',
        highLight : 0, //初始值为第一项高亮
        nowTitle : [],
    };
    // 高亮
    color(idx){
        console.log(idx);
        this.setState({
            highLight : idx
        })
    }
    // 确认键关闭底部弹窗
    commit(){
        console.log("确认");
        this.setState({
            local : !this.state.local
        })
        this.state.nowTitle.push(this.localTitle);
    }

    houseValue(){
        let selhouse = document.getElementById("selhouse");
        selhouse.text = this.state.nowTitle;
    }
    // 点击输入框显示底部弹窗
    buttonOn(){
        this.setState({
            local : !this.state.local,
        })
        // console.log(this.state.a);
    };
    
    render() {
        return (
            <div id="main">
                <div className="title">申请信息</div>
                <div style={{
                    paddingLeft: '25px',
                    backgroundColor: '#FFFFFF'
                }}>
                    <div className="field flex_box_container">
                        <div className="item_title">
                            <span>所在城市</span>
                        </div>
                        <div id="selarea" className="flex_box item_content ddlflag" value="">省/市/区</div>
                    </div>
                    <div className="field flex_box_container">
                        <div className="item_title"><span>申请金额</span></div>
                        <div className="flex_box item_content">
                            <input id="txtmoney" maxLength="10" placeholder="请输入金额" />
                        </div>
                    </div>
                    <div className="field flex_box_container">
                        <div className="item_title">
                            <span>本地房产</span>
                        </div>
                        <div id="selhouse" className="flex_box item_content ddlflag"  value="" 
                        onClick={
                                this.buttonOn.bind(this)
                        }>
                            请选择
                        </div>
                    </div>
                    <div className="field flex_box_container" style={{ height: 'auto' }}>
                        <div className="item_title" style={{ lineHeight: '50px' }}><span>职业</span></div>
                        <div id="selprofession" className="flex_box item_content ddlflag">
                            <span>请选择</span>
                        </div>
                    </div>
                    <div className="field flex_box_container" style={{ borderBottom: 'none' }}>
                        <div className="item_title"><span>身份证号</span></div>
                        <div className="flex_box item_content">
                            <input id="txtidno" maxLength="18" placeholder="请输入18位身份证号码" />
                        </div>
                    </div>
                </div>
                <div className="applyP" style={{
                    padding: '5px 15px 0px',
                    lineHeight: '22px',
                    fontSize: '14px',
                    marginBottom: '20px'
                }}>
                    <p>温馨提示:</p>
                    <p style={{ textIndent: '32px' }}>贷款资金只能用于企业正常经营或家庭合法消费，不能用于企业入股投资、金融市场投资、房地产投资、民间借贷等禁入领域。</p>
                </div>
                <div id="lblerrmsg" style={{
                    padding: '0px 15px',
                    margin: '-10px 0px 10px',
                    color: 'Red',
                    display: 'none'
                }}></div>
                <div style={{ padding: '0px 15px 20px' }}>
                    <div id="btnsubmit" className="button button_normal">下一步</div>
                </div>
                {/* 遮罩层 */}
                <div id="dialogue_shadow" style={{display:'none'}}></div>
                {/* <本地房产/> */}
                <div id="dialogue_content" style={this.state.local ?{display:'none'} : {display:'block'}}>
                    <div id="dialogue_title" 
                    // {padding:'0px'}
                    className="flex_box_container" >
                        <div className="flex_box" style={{
                            textAlign:'left', 
                            overflow:'hidden', 
                            paddingLeft:'15px'}}>
                            <span id="btnback" style={{
                                display: 'none', 
                                height: '10px',
                                width: '10px', 
                                marginTop: '13px', 
                                borderBottom:'2px solid rgb(0,116,225)',
                                borderLeft: '2px solid rgb(0,116,225)', borderImage: 'initial', 
                                borderTop: 'none', 
                                borderRight: 'none', 
                                transform: 'rotate(45deg)'}}></span>
                        </div>
                        <div className="flex_box" style={{
                            textAlign:'right', 
                            paddingRight:'15px'}}>
                            <span onClick={
                                this.commit.bind(this)
                            } id="btnok">确定</span>
                        </div>
                    </div>
                    <div id="housestate" style={{
                        padding:'0px 20px', 
                        color:'#565656'}}>
                        <div style={{margin:'15px 0px', fontWeight:'bold'}}>    
                            本地房产
                        </div>
                        <div className="flex_box_container" style={{paddingBottom:'15px'}}>
                            {this.state.title.map((item,index)=>{
                                return(
                                    <div key={index} className="flex_box" style={{paddingRight:'10px'}}>
                                        <span id="localhouse" 
                                        className={
                                        this.state.highLight===index?'option_item  option_item_selected' : 'option_item'
                                        }
                                        value="PLO"
                                        onClick={
                                            this.color.bind(this,index)
                                        }
                                        >
                                            {item.localTitle}
                                        </span>
                                    </div> 
                                )
                            })}
                        </div>
                        <div id="house_illu" style={{paddingBottom:'15px'}}>
                            受理申请后需要您提供房产证、备案合同等产权证明资料
                        </div>
                    </div>
                    {/* <职业/> */}
                    

                </div>
            </div>
        )
    }
    componentDidMount(){
        
    }
}

export default withRouter(connect((state) => {
    return state
})(ApplyLoan))