import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import Home from './Home';
import Wechat from './Wechat';
import History from './History';
import My from './My';
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabList: [
                { id: 0, title: '首页', icon: 'home' },
                { id: 1, title: '微聊', icon: 'wechat' },
                { id: 2, title: '历史', icon: 'history' },
                { id: 3, title: '我的', icon: 'my' }
            ],
            selectedTab: 0
        };
    }
    renderContent(pageText) {
        switch (pageText) {
            case 0:
                return <Home />
            case 1:
                return <Wechat />
            case 2:
                return <History />
            case 3:
                return <My />
            default:
                return <Home/>
        }
    }
    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#29C775"
                    barTintColor="white">
                    {
                        this.state.tabList.map((item) => {
                            return <TabBar.Item
                                title={item.title}
                                key={item.id}
                                icon={<div style={{
                                    width: '30px',
                                    height: '30px',
                                    background: `url(${require('../../assets/imgs/' + item.icon + '.png')}) center center /  30px 30px no-repeat`
                                }} />}
                                selectedIcon={<div style={{
                                    width: '30px',
                                    height: '30px',
                                    background: `url(${require('../../assets/imgs/' + item.icon + '_s.png')}) center center /  30px 30px no-repeat`
                                }} />}
                                selected={this.state.selectedTab === item.id}
                                onPress={() => {
                                    this.setState({
                                        selectedTab: item.id,
                                    });
                                }}>
                                {this.renderContent(this.state.selectedTab)}
                            </TabBar.Item>
                        })
                    }
                </TabBar>
            </div>
        )
    }
}