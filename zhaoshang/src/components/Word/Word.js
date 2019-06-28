import React from "react";
import { connect } from "react-redux";
import Swiper from "swiper/dist/js/swiper.js";
import "swiper/dist/css/swiper.min.css";

class Word extends React.Component {
  state = {
    imgUrl: [
      { img: "余额变动免费通知，省钱、实时、安全" },
      { img: "生意贷升级，无担保无抵押放款快额..." }
    ]
  };
  render() {
    return (
      <div className="scroll-infos" style={{}}>
        <div id="J_Scroll" mouseover="true" style={{ top: "0px" }}>
          <div className="index_img" style={{ width: "100%" }}>
            {
              <div
                className="swiper-container1"
                style={{ width: "100%", height: "30px" }}
              >
                <div
                  className="swiper-wrapper "
                  style={{ width: "100%", height: "30px" }}
                >
                  {this.state.imgUrl.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="swiper-slide "
                        style={{
                          width: "100%",
                          height: "30px"
                        }}
                      >
                        <a>{item.img}</a>
                      </div>
                    );
                  })}
                </div>
                <div className="swiper-pagination" 
                style={{display:'none'}}></div>
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
  
  componentDidMount() {
    new Swiper(".swiper-container1", {
      direction: "vertical", // （垂直：vertical）
      loop: true, // 循环模式选项
      autoplay: {
        //滑动后继续播放（不写官方默认暂停）
        disableOnInteraction: false
      },
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      },
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true //修改swiper的父元素时，自动初始化swiper
    });
  }
}

export default Word;
