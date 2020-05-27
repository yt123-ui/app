import React,{Component} from 'react';
import {Button} from 'antd-mobile';
export default class Wechat extends Component {
    render(){
        return (
            <div className="wechat" style={{width:300,height:300,position:'relative',top:'50%',left:'50%',transform:'translate(-50%,-50%)',backgroundColor:'#fff',textAlign:'center',lineHeight:'30px'}}>
                <img src={require('../../assets/imgs/home_s.png')} alt="" style={{width:100,height:100,backgroundColor:'red',borderRadius:'50%',margin:'20px 0'}}/>
                <p>置业顾问：<span style={{color:'#29C775'}}>张小妹</span></p>
                <p>专业服务诚信做人诚心做事！</p>
                <Button style={{backgroundColor:'#29C775',color:'#fff',marginTop:20}} inline size="small">我要聊天</Button>
            </div>
        )
    }
}