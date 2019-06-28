import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
class Infom extends React.Component {
    render() {
        return (
            <div data-v-20b69184="" className="cmb-block">
                <div data-v-20b69184="" className="cmb-title">
                    实时金融信息
                </div>
                <hr data-v-20b69184="" />
                <div data-v-20b69184="" className="double-list box-flex">
                    <div data-v-20b69184="" className="col-2 double-list-left">
                        <ul data-v-20b69184="" className="intime-left">
                            <li data-v-20b69184="">
                                <a data-v-20b69184="">存款利率</a>
                            </li>
                            <li data-v-20b69184="">
                                <Link data-v-20b69184="" to={{
                                    pathname: "/exchange"
                                }}>外汇实时汇率
                                </Link>
                            </li>
                            <li data-v-20b69184="">
                                <a data-v-20b69184="">个人理财产品净值
                                </a>
                            </li>
                            <li data-v-20b69184="">
                                <a data-v-20b69184="">银和理财产品净值
                                </a>
                            </li>
                            <li data-v-20b69184="">
                                <a data-v-20b69184="">离岸业务存款利率
                                </a>
                            </li>
                            <li data-v-20b69184="">
                                <a data-v-20b69184="">国际贵金属报价</a>
                            </li>
                            <li data-v-20b69184="">
                                <a data-v-20b69184="">招行股价</a>
                            </li>
                        </ul>
                    </div>
                    <div data-v-20b69184="" className="col-2 double-list-right">
                        <ul data-v-20b69184="" className="intime-right">
                            <li data-v-20b69184="">
                                <a data-v-20b69184="">贷款利率
                                </a>
                            </li>
                            <li data-v-20b69184="">
                                <a data-v-20b69184="">黄金市场行情
                                </a>
                            </li>
                            <li data-v-20b69184="">
                                <a data-v-20b69184="">公司理财产品净值
                                </a>
                            </li>
                            <li data-v-20b69184="">
                                <a data-v-20b69184="">基金净值
                                </a>
                            </li>
                            <li data-v-20b69184="">
                                <a data-v-20b69184="">国债柜台交易报价
                                </a>
                            </li>
                            <li data-v-20b69184="">
                                <a data-v-20b69184="">储蓄国债
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            // </div>
        )
    }
}
export default connect((state) => {
    return state
})(Infom)
