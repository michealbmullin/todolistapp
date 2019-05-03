import React, { Component } from 'react';


export default class TaskUpdater extends Component {
    constructor(props){
        super(props);
        this.state={
            taskId:(this.props.taskPassId),
            statusState:"true",
            text:(this.props.task)
        }
    }

    updateStatus=()=>{
        let url = "http://localhost:8585/api/v1/toDos//"+this.state.taskId;
        let updaty= new XMLHttpRequest();
        updaty.open("put", url);
        updaty.setRequestHeader("Content-Type", "application/json");
        updaty.responseType="json";
        let updatebody={
            task: (this.state.text),
            userId: "1",
            taskId: (this.state.taskId),
            dateAdded: "yet to be sorted",
            taskStatus: (this.state.statusState)
        }
        console.log(this.state.statusState)
        updatebody=JSON.stringify(updatebody);
        updaty.send(updatebody);
    }
    changeStatus=()=>{
        switch(this.state.statusState){
            case "true":
            this.setState({
                statusState:"false" 
            })
            break;
            case "false":
            this.setState({
                statusState:"true"
            })
            break;
            default:
            console.log("scuffed")
                break;
        }
        }
    
    updateWrap=()=>{
        this.changeStatus();
        this.updateStatus();
    }
render (){
    return(
            <button onClick={()=>{this.updateWrap(this.state.taskId)}}>
                status {this.statusState}
            </button>
    )
    }

}
