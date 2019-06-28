import React from 'react';
import { connect } from 'react-redux';

class FastNews extends React.Component {

    state = { 
        title :
        ['下手就要快！1元抢一个月芒果TV会员！',
        '下手就要快！1元抢一个月芒果TV会员！',
        '招行一卡通Apple Pay贝贝网随机立减！最高100元！',
        '开通Samsung Pay最高赢200元话费！',
        '更多&gt;&gt;',
        '暂无优惠快讯']
    };

    render() {
        return (
            <div data-v-31d8127e="" className="cmb-block">
                <div data-v-31d8127e="" className="cmb-title">
                    优惠快讯
                </div> 
                <hr data-v-31d8127e=""/> 
                <div data-v-31d8127e="" className="">
                    <ul data-v-31d8127e="" className="cmb-news-list">
                    {
                        // console.log(this.state.title) 
                        this.state.title.map((item,index)=>{
                            return(
                                <li key={index} data-v-31d8127e="">
                                    <a data-v-31d8127e="">
                                        {item}
                                    </a>
                                </li>
                            )
                        })
                    }
                    </ul> 
                    <hr data-v-31d8127e="" className="mglr-15"/> 
                    <a data-v-31d8127e="" className="cmb-list-more">
                        更多&gt;&gt;
                    </a> 
                    <label data-v-31d8127e="" className="nodata-lable" 
                    style={{display: 'none'}}>
                        暂无优惠快讯
                    </label>
                </div>
            </div>
                )
            }
        }

export default connect((state)=>{
    return state
})(FastNews)