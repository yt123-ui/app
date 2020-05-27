import React,{Component} from 'react';
import HistoryItem from '../../components/HistoryItem';
import {connect} from 'react-redux';
class History extends Component {
    render(){
        return (
            <div>
                {
                    this.props.historyList.map((item,index)=>{
                        return <HistoryItem item={item} key={index}/>
                    })
                }
                
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        historyList:state.historyList
    }
}
export default connect(mapStateToProps)(History)