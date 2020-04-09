import axios from 'axios';
import qs from 'qs';

axios.interceptors.request.use((req)=>{
    const token = sessionStorage.getItem('token');
    if(token){
        req.headers.token = token;
    }
    if(req.method==='post'){
        req.data = qs.stringify(req.data);
    }
    return req;
    
},(err)=>Promise.reject(err));

axios.interceptors.response.use((res) =>{
    return res.data;
},(err)=>{
   return Promise.reject(err)
});