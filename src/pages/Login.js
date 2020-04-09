import React,{Component} from 'react';
import {Flex,List,InputItem,WhiteSpace,Button} from 'antd-mobile';
import {Link} from 'react-router-dom';
import {loginApi} from '../apis/apis';

export default class Login extends Component{
    state = {
        phone:'',
        pwd:''
    }
    phoneChange =(val)=>{
        this.setState({phone:val})
    }
    pwdChange =(val)=>{
        this.setState({pwd:val})
    }
    loginHandler =()=>{        
        const {phone,pwd} = this.state;
        const params = {
            password:pwd,
            phoneNum:phone
        }
        loginApi(params).then((res)=>{            
            const {token,data} = res;
            if(token){
                sessionStorage.setItem('token',token);
                sessionStorage.setItem('phone',data.phoneNum);
                this.props.history.push('/');
            }else{
                alert('登录失败');
            } 
        }).catch((err) =>{
            console.log(err);
        })
    }
    render(){
        const {phone,pwd} = this.state;
        return (
            <div style={{background:'#fff',height:'100%',padding:10}}>
                <Flex justify="center" style={{padding:50}}>
                    <img alt="" style={{width:100,height:100}} src={require('../assets/imgs/logo.png')} />
                </Flex>
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="lg" />
                <List>
                    <InputItem ref="phone" value={phone} onChange={this.phoneChange} placeholder="请输入手机号">
                    <div><i className="iconfont icon-user" style={{fontSize:25,color:'#29C775'}}></i></div>
                    </InputItem>
                    <InputItem ref="pwd" value={pwd} onChange={this.pwdChange} placeholder="请输入密码" type="password">
                    <div><i className="iconfont icon-i-pwd" style={{fontSize:25,color:'#29C775'}}></i></div>
                    </InputItem>
                </List>
            <WhiteSpace size="xl"/>
            <Button style={{backgroundColor:'#29C775',color:'#fff'}} onClick={this.loginHandler}>登录</Button>
            <WhiteSpace size="xl" />
            <Flex justify="between" >
                <Link to="register" style={{color:'#29C775'}}>手机快速注册</Link>
                <Link to="forgot" style={{color:'#29C775'}}>忘记密码</Link>
            </Flex>
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <p style={{textAlign:'center',color:'#aaa'}}>登录注册代表同意同意《源码房产用户协议》</p>
            </div>
        )
    }
}