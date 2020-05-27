import { createStore } from 'redux';
// import thunk from 'react-thunk';
// import {getHouseListApi} from './apis/apis';
export default createStore(reducer);
function reducer(state = {
    name: '张三',
    age: 20,
    cls: '1029',
    list: [
        { id: 0, name: '苹果', price: 10, num: 1 },
        { id: 1, name: '西瓜', price: 5, num: 1 },
        { id: 2, name: '橘子', price: 8, num: 1 },
    ],
    historyList:[],
    city:'定位中...',
    houseList:[]
}, action) {
    const { n, index,curHistoryItem } = action
    let falg = true;
    let key = 0;
    switch (action.type) {
        case 'changeNum':
            state.list[index].num += n;
            return {
                ...state,
                list: [...state.list]
            }
        case 'deleteGoods':
            state.list.splice(index, 1);
            return {
                ...state,
                list: [...state.list]
            }
        case 'addHistory':
            state.historyList.unshift(curHistoryItem)
            for(let i=0;i<state.historyList.length;i++){
                if(curHistoryItem.id === state.historyList[i].id){
                    falg = !falg;
                    key = i;
                }
            }
            if(falg){
                state.historyList.splice(key,1);
            }
            return {
                ...state,
                historyList:[...state.historyList]
            }
        case 'changeCity':
            return {
                ...state,
                city:action.city
            }
        case 'initHouseList':
            return {
                ...state,
                houseList:action.list
            }
        default:
            return state;
    }
}
export const changeNumAC = (index, n) => ({
    type: 'changeNum',
    n,
    index
})
export const changeGoodsAC = (index) => ({
    type: 'deleteGoods',
    index
})
export const addHistoryAC = (curHistoryItem) => ({
    type:'addHistory',
    curHistoryItem
})
export const changeCityAC = (city) =>({
    type:'changeCity',
    city
})
export const initHouseListAC = (list) =>({
    type:'initHouseList',
    list
})
// export const getHouseListAC = () =>{
//     return (dispatch) =>{
//         getHouseListApi().then((res)=>{
//             dispatch(initHouseListAC(res.data));
//         }).catch((err) =>{
//             console.log(err);
//         })
//     }
// }