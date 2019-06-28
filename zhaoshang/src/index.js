import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/animate.min.css'
import './index.css';

// 1.引入路由
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";

// 2.路由组件
import Login from './pages/Login/Login'
import Reg from './pages/Reg/Reg'
import Home from './pages/Home/Home';
import ApplyLoan from './pages/ApplyLoan/ApplyLoan';
import Exchange from './pages/Exchange';
import ExchangeMore from './pages/ExchangeMore';


// 从react-redux导出一个Provider组件，这个组件是用来在react激活redux使用的
import { Provider } from "react-redux";
import store from "./store/store";

// 3.设置路由
ReactDOM.render(
    <Provider store={store}>
    <Router >
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/applyloan' component={ApplyLoan}/>
            <Route path="/exchange" exact component={Exchange} />
            <Route path='/exchangemore' exact component={ExchangeMore} />
            <Route path='/reg' component={Reg} />
            <Route path='/login' component={Login} />
        </Switch>
        {/* 路由重定向 */}
        {/* <Redirect to="/home" /> */}
    </Router></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
