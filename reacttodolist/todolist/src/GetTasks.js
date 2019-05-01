import React, { Component } from 'react';


export default class GetTasks extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: "",
            datArr: []
        }
    }

    getTasks = () => {
        let url = "http://localhost:8585/api/v1/toDos";
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
        this.getTasks();
    }
    deleteTask=(taskId)=>{
        let url="http://localhost:8585/api/v1/toDos/"+taskId;
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
        let tasks = this.state.datArr.map((d,i) => <p key={"task "+ i} id={d.taskId}> {d.task} <button onClick={()=>{this.deleteTask(d.taskId)}}> delete </button></p>);
        return (
            <div>
                {tasks}
            </div>

        )

    }
}
