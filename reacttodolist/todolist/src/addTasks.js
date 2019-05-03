import React, { Component } from 'react';

export default class AddTasks extends Component{
    constructor(props){
        super(props);
        this.state={
            text:"",
            arr:[]
        }
    }
    textUpdater=(inp)=>{
        this.setState({
            text:inp.target.value
        });
    }
    
    addy = () => {
        let arra = this.state.arr;
        arra.push(this.state.text);
        this.setState({
            arr:arra
        });

    }
    postTask=()=>{
        let addyurl = "http://localhost:8585/api/v1/addtoDos";
        let posty = new XMLHttpRequest();
        posty.responseType = "json";
        posty.open("post", addyurl);
        posty.setRequestHeader("Content-Type", "application/json");
        posty.setRequestHeader("Accept", "application/json;charset=UTF-8");
        let addbody = {
            task: this.state.text,
            userId: "1",
            taskId: "",
            dateAdded: "20190425",
            taskStatus: "true"
        }
        addbody = JSON.stringify(addbody);
    
        posty.send(addbody);
    }
   postWrapper=()=>{
       this.addy();
       this.postTask();
       this.props.refreshTrigger(10);
   }
    

render(){
    return(
        <div>
        <input type="text" onChange={this.textUpdater}/>
        <button onClick={this.postWrapper} >add tasks</button>
    {this.state.arr.map((arr,i) => <p key={"task"+i}>{arr}</p>)}
    
        </div>
    );
    }


 }
