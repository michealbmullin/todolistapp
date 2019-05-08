import React, { Component } from 'react';

export default class AddTasks extends Component{
    constructor(props){
        super(props);
        this.state={
            text:"",
            arr:[],
            addyRefresh:0
        }
    }
    textUpdater=(inp)=>{
        this.setState({
            text:inp.target.value
        });
    }
    rand=()=>{
        let randomnum=(Math.floor(Math.random()*Math.floor(1000)))
        this.setState({
            addyRefresh:randomnum
        })
        console.log("addy ref after rand "+this.state.addyRefresh);
        console.log("code for random number"+)
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
            userId: this.props.UserId,
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
       this.rand();
       console.log("this should trigger a refresh if addyrefresh aint 0");
       console.log(this.state.addyRefresh);
       this.props.callback(this.state.addyRefresh);
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
