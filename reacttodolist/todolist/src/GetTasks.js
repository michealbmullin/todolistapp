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
            passedRefVar:0,
            renderTrig:0
        }
    }
    componentDidUpdate=(prevProp,prevState)=>{
        if(this.state.passedRefVar!==prevState.passedRefVar){
            this.getTasks(); 
            console.log(this.state.passedRefVar)
            console.log("rerun gets tasks if passed revar changes")
        }else{
        console.log("didnt rerender")
        console.log(prevState.passedRefVar+"previous state")
        console.log(this.state.passedRefVar+"current")
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
                datArr: getty.response,
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
        this.setState({
            passedRefVar:this.props.refreshVar
        })
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
            this.getTasks();
            this.forceUpdate();
        }
        delety.send();
        
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
