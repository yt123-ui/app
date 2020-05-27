import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Main from './pages/main/Main';

const Loading = () => <div>加载中...</div>;

const Login = Loadable({
    loader: () => import(/*webpackChunkName:'Login'*/'./pages/Login'),
    loading: Loading
})
const Register = Loadable({
    loader: () => import(/*webpackChunkName:'Register'*/'./pages/Register'),
    loading: Loading
})
const Forgot = Loadable({
    loader: () => import(/*webpackChunkName:'Forgot'*/'./pages/Forgot'),
    loading: Loading
})
const Map = Loadable({
    loader: () => import(/*webpackChunkName:'Map'*/'./pages/Map'),
    loading: Loading
})
const City = Loadable({
    loader: () => import(/*webpackChunkName:'City'*/'./pages/City'),
    loading: Loading
})
// const ShopCar = Loadable({
//     loader: () =>import('./pages/ShopCar'),
//     loading:Loading
// })
export default class App extends React.Component {
    render() {
        return <HashRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/forgot" component={Forgot} />
                <Route path="/map" component={Map} />
                <Route path="/city" component={City} />
            </Switch>
        </HashRouter>
    }
};