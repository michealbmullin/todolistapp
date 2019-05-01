import React, { Component } from 'react';


export default class TaskUpdater extends Component {
    constructor(props){
        super(props);
        this.state={
            statusState:0
        }
    }

    updatestatus=()=>{
        let url = "http://localhost:8585/api/v1/toDos/"+taskId;
        let updaty= new XMLHttpRequest();
        updaty.open("put", url);
        updaty.setRequestHeader("Content-Type", "application/json");
        updaty.responseType="json";
        let updatebody={
            task: this.state.text,
            userId: "1",
            taskId: this.state.taskId,
            dateAdded: "yet to be sorted",
            taskStatus: this.statusState
        }
    }
    changeStatus=()=>{
        if ((this.statusState)=0){
            this.setState({
                statusState:1
            })
        }
        else{
            this.setState({
                statusState:0
            })

        }
    }


}