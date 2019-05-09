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
    rand=(inp)=>{
        
        this.setState({
            addyRefresh:inp
        })
        console.log("addy ref after rand "+this.state.addyRefresh);
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
       this.rand(1);
       console.log("this should trigger a refresh if addyrefresh aint 0");
       console.log(this.state.addyRefresh);
       this.props.callback(this.state.addyRefresh);
   }
render(){
    return(
        <div>
        <input type="text" onChange={this.textUpdater}/>
        <button type="button" onClick={this.postWrapper} >add tasks</button>
    {this.state.arr.map((arr,i) => <p key={"task"+i}>{arr}</p>)}
        </div>
    );
    }


 }
