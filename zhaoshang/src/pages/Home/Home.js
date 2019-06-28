import React, { Component } from 'react';
import Word from '../../components/Word/Word';
import Swiperr from '../../components/Swiper/Swiper';
import SmallLogo from '../../components/SmallLogo/SmallLogo';
import Infom from '../../components/Infom/Infom';
import NetPlace from '../../components/NetPlace/NetPlace';
import FastNews from '../../components/FastNews/FastNews';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { connect } from 'react-redux';//添加redux仓库

class Home extends React.Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'CHANGEHEADER',
            headerComponent: 'home',
        })
    }

    render() {
        return (
            <div style={{position:'relative'}}>
                <Header />
                <div style={{position:'absolute',top:'47px',width:'100%',zIndex:'8888'}}>
                    <Swiperr />
                    <SmallLogo />
                    <Word />
                    <Infom />
                    <NetPlace />
                    <FastNews />
                    <Footer />
                </div>
            </div>
        )
    }
}

export default connect((state) => {
    return state
})(Home)