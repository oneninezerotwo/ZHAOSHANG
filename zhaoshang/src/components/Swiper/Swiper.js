import React from "react";
import { connect } from "react-redux";
import Swiper from "swiper/dist/js/swiper.js";
import "swiper/dist/css/swiper.min.css";
class Swiperr extends React.Component {
  state = {
    imgUrl: [
      {
        img:
          "http://images.cmbchina.com/cmbadv/201906/3d8bdd98-5438-41c5-9397-8bf3a342ae12.jpg"
      },

      {
        img:
          "https://news-a.akamaihd.net/public/images/wallpapers/champions/promo/jhin-promo-zed-wallpaper-1920x1080.jpg"
      }
    ]
  };
  render() {
    console.log(this);
    return (
      <div className="index_img" style={{ width: "100%" }}>
        {
          <div
            className="swiper-container "
            style={{ width: "100%", height: "130px" }}
          >
            <div
              className="swiper-wrapper "
              style={{ width: "100%", height: "130px" }}
            >
              {this.state.imgUrl.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="swiper-slide "
                    style={{
                      width: "100%",
                      height: "130px",
                      background: `url(${item.img}) no-repeat`,
                      backgroundSize: "100% 100%"
                    }}
                  >
                    {/* <img src={item.img} style={{ width: '100%' ,height:'130px' ,backgroundSize:'cover'}} /> */}
                  </div>
                );
              })}
            </div>
            <div className="swiper-pagination" />
          </div>
        }
      </div>
    );
  }
  componentDidMount() {
    new Swiper(".swiper-container", {
      direction: "horizontal", //水平轮播 （垂直：vertical）
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
export default connect(state => {
  return state;
})(Swiperr);
