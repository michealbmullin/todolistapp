import React, { Component } from 'react';
import {Connection} from './Constants';

export default class TaskUpdater extends Component {
    constructor(props){
        super(props);
        this.state={
            taskId:(this.props.taskPassId),
            statusState:"true",
            text:(this.props.task),
            buttonDisplay:"uncompleted",
            updUserId:this.props.UserId
        }
    }

    updateStatus=()=>{
        let url = `${Connection}8585/api/v1/toDos//`+this.state.taskId;
        let updaty= new XMLHttpRequest();
        updaty.open("put", url);
        updaty.setRequestHeader("Content-Type", "application/json");
        updaty.responseType="json";
        let updatebody={
            task: (this.state.text),
            userId: this.state.updUserId,
            taskId: (this.state.taskId),
            dateAdded: "yet to be sorted",
            taskStatus: (this.state.statusState)
        }
        updatebody=JSON.stringify(updatebody);
        updaty.send(updatebody);
    }
    changeStatus=()=>{
        switch(this.state.statusState){
            case "true":
            this.setState({
                statusState:"false",
                buttonDisplay:"completed"
            })
            break;
            case "false":
            this.setState({
                statusState:"true",
                buttonDisplay:"uncomplete"
            })
            break;
            default:
            break;
        }
    }
    updateWrap=()=>{
        this.changeStatus();
        this.updateStatus();
    }
render (){
    return(
            <button id={this.state.buttonDisplay} onClick={()=>{this.updateWrap(this.state.taskId)}}>
            {this.state.buttonDisplay}
            </button>
    )
    }

}
