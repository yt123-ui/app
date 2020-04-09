import React, { Component } from 'react';
import { InputItem, Button, Checkbox, WhiteSpace } from 'antd-mobile';
import { Link } from 'react-router-dom';
const AgreeItem = Checkbox.AgreeItem;
export default class Register extends Component {
    render() {
        return (
            <div style={{ padding: 20, height: '100%', backgroundColor: '#fff' }}>
                <InputItem placeholder="请输入手机号"></InputItem>
                <InputItem placeholder="请输入密码"></InputItem>
                <InputItem placeholder="请输入验证码" extra={<button style={{ backgroundColor: '#fff', color: '#aaa', border: 'none', fontSize: 12 }}>获取验证码</button>}></InputItem>
                <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}>
                    <span style={{ fontSize: 12 }}>我已同意<a href="login" style={{ color: '#29C775' }}>《用户服务协议》及《隐私权政策》</a></span>
                </AgreeItem>
                <Button style={{ backgroundColor: '#29C775', color: '#fff' }}>注册</Button>
                <WhiteSpace size="lg" />
                <Link to="/login" style={{ color: '#29C775' }}>已有账号</Link>
            </div>
        )
    }
}