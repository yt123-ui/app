import React, { Component } from 'react';
import { List } from 'antd-mobile';
import { hotcity, cities } from '../config/city.json';
import BScorll from 'better-scroll';
import {connect} from 'react-redux';
import { changeCityAC } from '../store';

class City extends Component {
    componentDidMount(){
        const wrapper = document.getElementById('wrapper');
        this.scroll = new BScorll(wrapper,{click:true});
    }
    selectCity = (city)=>{
        this.props.dispatch(changeCityAC(city));
        this.props.history.goBack();
    }
    goToLetter =(id)=>{
        this.scroll.scrollToElement(`#${id}`,500);
    }
    render() {
        const Item = List.Item;
        return (
            <div className="city" >
                <div style={{ position: 'fixed', top: 80, bottom: 0, right: 0, width: 40, textAlign: 'center' }}>
                    {
                        cities.map((item) => {
                            return (<div style={{ padding: 5 }} key={item.title} onClick={()=>this.goToLetter(item.title)}>{item.title}</div>)
                        })
                    }
                </div>
                <div id="wrapper" style={{ position: 'fixed', top: 0, left: 0, right: 40, bottom: 0, overflow: 'auto' }}>
                    <div>
                        <h2 style={{ fontSize: 20, fontWeight: 'bolder', padding: 10 }}>热门城市</h2>
                        <List className="hotcity-list">
                            {
                                hotcity.map((city) => {
                                    return (<Item onClick={()=>this.selectCity(city)} key={city}>{city}</Item>)
                                })
                            }
                        </List>
                        {
                            cities.map((item) => {
                                return (
                                    <div key={item.title} id={item.title}>
                                        <h2 style={{ fontSize: 20, fontWeight: 'bolder', padding: 10 }}>{item.title}</h2>
                                        <List className="city-list">
                                            {
                                                item.lists.map((city)=>{
                                                    return (
                                                        <Item onClick={()=>this.selectCity(city)} key={city}>{city}</Item>
                                                    )
                                                })
                                            }
                                        </List>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        )
    }
}
export default connect()(City)