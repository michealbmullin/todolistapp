import React, { Component } from 'react';
import TaskUpdater from './TaskUpdater';
import {Connection} from './Constants';
import './Main.css';

export default class GetTasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
            data: "",
            datArr: [],
            updatevar:0,
            getUserId:this.props.UserId,
            passedRefVar:this.props.refreshVar,
            renderTrig:0
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
    reGetOnUpdate=()=>{
        this.getTasks();
    }

    componentDidMount = () => {
        console.log(this.props.UserId+"current user id");
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
            console.log("entry deleted");
        }
        delety.send();
        console.log("force render on del")
        this.forceUpdate();
        console.log("checking rendertrigvalue "+this.state.renderTrig)
        this.getTasks();
    }

    render() {
        let tasks = this.state.datArr.map((d,i) => <p key={"task "+ i} id={d.taskId} className="tasksBox"> {d.task} 
        <button className="button font"onClick={()=>{this.deleteTask(d.taskId)}}> delete </button>
        <TaskUpdater task={d.task} taskPassId={d.taskId} UserId={this.state.getUserId} reGetOnUpdate={this.reGetOnUpdate} />
        </p>);
        return (
            <div className="pageBody font maxWidthWrap">
                {tasks}
            </div>

        )

    }
}
