import React, { Component } from 'react';
import TaskUpdater from './TaskUpdater';
import {Connection} from './Constants';

export default class GetTasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
            data: "",
            datArr: [],
            updatevar:0,
            getUserId:this.props.UserId
        }
    }
    getTasks = () => {
        console.log("in gettasks");
        console.log(this.props.UserId)
        let url = `${Connection}8585/api/v1/toDos/`+this.props.UserId;
        let getty = new XMLHttpRequest();
        getty.open('GET', url)
        getty.responseType = "json";
        getty.onload = () => {
            this.setState({
                datArr: getty.response
            });

        }
        getty.send();
    }

    componentDidMount = () => {
        console.log("componenetdidmount")
        console.log(this.props.UserId)
        this.getTasks();

    }
    deleteTask=(taskId)=>{
        let url=`${Connection}8585/api/v1/toDos/`+taskId;
        console.log({taskId})
        let delety= new XMLHttpRequest();
        delety.open("delete",url);
        delety.setRequestHeader("Content-Type", "application/json");
        delety.responseType="json";
       
        delety.onload=()=>{
            console.log(delety.response);
        }
        delety.send();
    }

    render() {
        let tasks = this.state.datArr.map((d,i) => <p key={"task "+ i} id={d.taskId}> {d.task} <button onClick={()=>{this.deleteTask(d.taskId)}}> delete </button>
        <TaskUpdater task={d.task} taskPassId={d.taskId} UserId={this.state.getUserId} />
        </p>);
        return (
            <div>
                {tasks}
            </div>

        )

    }
}
