import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';

export const loginApi = (params) =>axios.post('/login',params);

export const getHouseListApi = () =>axios.get('/getHouseList');
