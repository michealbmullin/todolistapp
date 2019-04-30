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

    render() {
        let tasks = this.state.datArr.map((d,i) => <p key={"task "+`${this.datArr.taskId}`}> {d.task} <button> delete </button></p>);
        return (
            <div>
                {tasks}
            </div>

        )

    }
}
