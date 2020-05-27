import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeNumAC } from '../store';
import { changeGoodsAC } from '../store';
class ShopCar extends Component {
    changeNum = (index, n) => {
        this.props.dispatch(changeNumAC(index, n));
    }
    deleteGoods = (index) => {
        this.props.dispatch(changeGoodsAC(index));
    }
    render() {
        const { list } = this.props;
        return (
            <table>
                <thead>
                    <tr>
                        <th>商品名</th>
                        <th>单价</th>
                        <th>数量</th>
                        <th>小计</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((item, index) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <button onClick={() => this.changeNum(index, -1)}>-</button>
                                        {item.num}
                                        <button onClick={() => this.changeNum(index, 1)}>+</button>
                                    </td>
                                    <td>{item.price * item.num}</td>
                                    <td>
                                        <button onClick={() => this.deleteGoods(index)}>删除</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        list: state.list
    }
}
export default connect(mapStateToProps)(ShopCar)