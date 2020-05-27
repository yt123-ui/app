import React, { Component } from 'react';
import { Flex, List } from 'antd-mobile';
import { Link } from 'react-router-dom';
const Item = List.Item;
export default class My extends Component {
    state = {
        list: [
            { id: 0, img: "https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png", text: "我的积分" },
            { id: 1, img: "https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png", text: "我的订阅" },
            { id: 2, img: "https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png", text: "微聊联系人" },
            { id: 9, },
            { id: 3, img: "https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png", text: "房贷计算器" },
            { id: 4, img: "https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png", text: "我的房子" },
            { id: 10 },
            { id: 5, img: "https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png", text: "我的看房记录" },
            { id: 6, img: "https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png", text: "我的问答" },
            { id: 7, img: "https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png", text: "设置" },
            { id: 8, img: "https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png", text: "意见反馈" },
        ]
    }
    getPhone = () => {
        const username = sessionStorage.getItem('phone');
        if (username) {
            return <span style={{ fontSize: 18, color: '#fff' }}>{username}</span>
        } else {
            return (<span >
                <Link style={{ fontSize: 18, color: '#fff' }} to='/Login'>登录</Link>/<Link style={{ fontSize: 18, color: '#fff' }} to='/register'>注册</Link>
            </span>)
        }
    }
    render() {
        const { list } = this.state;
        return (
            <div className="my">
                <div style={{ padding: 10, backgroundColor: 'skyblue' }}>
                    <Flex>
                        <img src={require('../../assets/imgs/icon_2.png')} alt="" style={{ width: 50, height: 50, backgroundColor: 'blue', borderRadius: '50%' }} />
                        <div style={{ padding: '0 10px', flex: 1, lineHeight: '20px', height: 50 }}>
                            <Flex justify="between">
                                {
                                    this.getPhone()
                                }
                                <span>设置</span>
                            </Flex>
                            <p>可与经纪人发起聊天</p>
                        </div>
                    </Flex>
                </div>
                <List>
                    {
                        list.map((item) => {
                            if (item.img && item.text) {
                                return (
                                    <Item thumb={item.img} key={item.id} arrow="horizontal">{item.text}</Item>
                                )
                            } else {
                                return <div key={item.id} style={{ height: 20, background: '#ccc' }}></div>
                            }
                        })
                    }
                </List>
            </div>
        )
    }
}