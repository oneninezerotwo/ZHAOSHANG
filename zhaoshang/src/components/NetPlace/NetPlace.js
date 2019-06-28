import React from "react";
import { connect } from "react-redux";

class NetPlace extends React.Component {
    render() {
        return (
            <div data-v-d258525a="" className="net-dot">
                <div data-v-d258525a="" className="cmb-title">
                    服务网点
                </div>
                <hr data-v-d258525a="" />
                <div data-v-d258525a="" className="nd-row box-flex">
                    {this.props.netPls.map((item, index) => {
                        return (
                            <div data-v-d258525a="" className="col-4"
                            key={index}>
                                <a>
                                    <div data-v-d258525a="" className="iconx-52 {item.cName}"
                                    // iconx-52-tb09-2
                                    >
                                        <img style={{width:'48px',
                                        height:'48px'
                                    }} src={item.imgUrl}/>
                                    </div>
                                    <p data-v-d258525a="" className="text-center">
                                        {item.title}
                                    </p>
                                </a>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        )
    }
    componentDidMount() {
        console.log(this);
    }
}
export default connect((state) => {
    return state
})(NetPlace)