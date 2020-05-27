import React, { Component } from 'react';
import { Flex } from 'antd-mobile';
export default class HistoryItem extends Component {
    render() {
        const {item,addHistory} = this.props;
        return (
            <Flex style={{ paddingTop: 10 }} onClick={()=>addHistory(item)}>
                <img src={item.pic} alt="" style={{ width: 100, height: 100 }} />
                <div style={{ flex: 1, padding: '0 10px', lineHeight: '20px', height: 100 }}>
                    <Flex justify="between">
                        <span style={{ fontSize: 20, fontWeight: 'bold' }}>绿地锦天府</span>
                        <span style={{ fontSize: 16, color: 'red', fontWeight: 'bold' }}>19000/平</span>
                    </Flex>
                    <p>成华区 东客站</p>
                    <p>2室1厅 72平</p>
                </div>
            </Flex>
        )
    }
}