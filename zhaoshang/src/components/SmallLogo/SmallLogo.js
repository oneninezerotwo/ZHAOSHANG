import React from "react";
import { connect } from "react-redux";
import {Link,withRouter} from 'react-router-dom';
import './SmallLogo.css';

class SmallLogo extends React.Component {
  render() {
    return (
      <div data-v-103e1f62="" className="quick-service">
        <div data-v-103e1f62="" className="qs-row box-flex">
          <div data-v-103e1f62="" className="col-4">
            <a
              data-v-103e1f62=""
            >
              <div data-v-103e1f62="" className="iconx-52 iconx-52-tb01" />{" "}
              <p
                className="text-center"
              >
                招商银行App
              </p>
            </a>
          </div>{" "}
          <div data-v-103e1f62="" className="col-4">
            <a
              data-v-103e1f62=""
            >
              <div data-v-103e1f62="" className="iconx-52 iconx-52-tb02" />{" "}
              <p
                data-v-103e1f62=""
                className="text-center"
              >
                信用卡申请
              </p>
            </a>
          </div>{" "}
          <div data-v-103e1f62="" className="col-4">
            <Link to="/applyLoan"
              data-v-103e1f62=""
            >
              <div data-v-103e1f62="" className="iconx-52 iconx-52-tb05" />{" "}
              <p
                data-v-103e1f62=""
                className="text-center"
              >
                贷款申请
              </p>
            </Link>
          </div>{" "}
          <div data-v-103e1f62="" className="col-4">
            <a
              data-v-103e1f62=""
              otype="文字"
            >
              <div data-v-103e1f62="" className="iconx-52 iconx-52-tb06" />{" "}
              <p
                data-v-103e1f62=""
                className="text-center"
              >
                商旅出行
              </p>
            </a>
          </div>
        </div>{" "}
        <div data-v-103e1f62="" className="qs-row box-flex">
          <div data-v-103e1f62="" className="col-4">
            <a
              data-v-103e1f62=""
            >
              <div data-v-103e1f62="" className="iconx-52 iconx-52-tb13" />{" "}
              <p
                data-v-103e1f62=""
                className="text-center"
              >
                借记卡申请
              </p>
            </a>
          </div>{" "}
          <div data-v-103e1f62="" className="col-4">
            <a
              data-v-103e1f62=""
            >
              <div data-v-103e1f62="" className="iconx-52 iconx-52-tb04" />{" "}
              <p
                data-v-103e1f62=""
                className="text-center"
              >
                信用卡客服
              </p>
            </a>
          </div>{" "}
          <div data-v-103e1f62="" className="col-4">
            <a
              data-v-103e1f62=""
            >
              <div data-v-103e1f62="" className="iconx-52 iconx-52-tb08" />{" "}
              <p
                data-v-103e1f62=""
                className="text-center"
              >
                积分乐园
              </p>
            </a>
          </div>{" "}
          <div data-v-103e1f62="" className="col-4">
            <a
              data-v-103e1f62=""
            >
              <div data-v-103e1f62="" className="iconx-52 iconx-52-tb07" />{" "}
              <p
                data-v-103e1f62=""
                className="text-center"
              >
                理财计算器
              </p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}



export default connect(state => {
  return state;
})(SmallLogo);
