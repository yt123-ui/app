import React, { Component } from 'react';
import { Flex, Carousel, Grid, WhiteSpace } from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import HistoryItem from '../../components/HistoryItem';
import { addHistoryAC, changeCityAC } from '../../store';
import { connect } from 'react-redux';
import {getHouseListApi} from '../../apis/apis';
class Home extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
        list:[]
    }
    goTosomeWhere = (url) => {
        this.props.history.push(url);
    }
    addHistory = (curHistoryItem) => {
        this.props.dispatch(addHistoryAC(curHistoryItem));
    }
    componentDidMount() {
        const _this = this;        
        if (this.props.city === '定位中...') {
            window.AMap.plugin('AMap.CitySearch', function () {
                var citySearch = new window.AMap.CitySearch()
                citySearch.getLocalCity(function (status, result) {
                    if (status === 'complete' && result.info === 'OK') {
                        const city = result.city;
                        _this.props.dispatch(changeCityAC(city));
                    }
                })
            })
        }
        setTimeout(() => {
            this.setState({
                data: ['1', '2', '3']
            });
        }, 100);
        // this.props.dispatch(getHouseListAC())
        getHouseListApi().then((res)=>{
            // dispatch(initHouseListAC(res.data));
            this.setState({list:res.data});
        }).catch((err) =>{
            console.log(err);
        })
    }
    render() {
        const data = [
            { text: '新房', icon: 1 },
            { text: '二手房', icon: 2 },
            { text: '租房', icon: 3 },
            { text: '商铺写字楼', icon: 4 },
            { text: '卖房', icon: 5 },
            { text: '海外房产', icon: 6 },
            { text: '小区房价', icon: 7 },
            { text: '问答', icon: 1 },
        ].map((item) => ({
            icon: require(`../../assets/imgs/icon_${item.icon}.png`),
            text: item.text
        }))
        return (
            <div className="main">
                <Flex style={{ height: 40, padding: '0 10px', backgroundColor: '#29C775' }}>
                    <div style={{ width: 60 }}><span style={{ color: '#fff' }} onClick={() => this.goTosomeWhere('/city')}>{this.props.city}▼</span></div>
                    <Flex style={{ backgroundColor: '#fff', flex: 1, borderRadius: 20, height: 30 }} onClick={() => this.goTosomeWhere('/serch')}>
                        <img alt="" src={require('../../assets/imgs/search.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
                        <span style={{ color: '#aaa' }}>挑好房，上源码房产app</span>
                    </Flex>
                    <img alt="" src={require('../../assets/imgs/map.png')} style={{ width: 30, height: 30 }} onClick={() => this.goTosomeWhere('/map')} />
                </Flex>
                <Carousel autoplay={true} infinite>
                    {this.state.data.map(val => (
                        <a key={val} href="http://www.alipay.com" style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}>
                            <img src={require(`../../assets/imgs/carousel_${val}.jpg`)} alt="" style={{ width: '100%', verticalAlign: 'top' }} />
                        </a>
                    ))}
                </Carousel>
                <Grid data={data} isCarousel hasLine={false} />
                <WhiteSpace size="lg" />
                <div style={{ padding: '5px 20px', backgroundColor: '#fff' }}>
                    <p><span style={{ fontSize: 18, color: '#29C775', fontWeight: 'bold', paddingRight: 10 }}>房产全百科</span>专业的买房攻略</p>
                    <Grid data={data} isCarousel hasLine={false} />
                </div>
                <WhiteSpace size="lg" />
                <div className="list" style={{ padding: 10, backgroundColor: '#fff' }}>
                    <p style={{ fontSize: 16, paddingLeft: 10 }}>猜你喜欢</p>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <HistoryItem item={item} addHistory={this.addHistory} key={index} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        city:state.city,
        list:state.houseList
    }
}
export default connect(mapStateToProps)(withRouter(Home));