import React, { Component } from 'react';
import {Connection} from './Constants';
import './Main.css';


export default class AddTasks extends Component{
    constructor(props){
        super(props);
        this.state={
            text:"",
            arr:[],
            addyRefresh:1
        }
    }
    textUpdater=(inp)=>{
        this.setState({
            text:inp.target.value
        });
    }
    rand=(inp)=>{
        console.log("add refresh before rand func"+this.state.addyRefresh);
        let varnumber=inp+this.state.addyRefresh;
        this.setState({
            addyRefresh:varnumber
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
        let addyurl = `${Connection}8585/api/v1/addtoDos`;
        let posty = new XMLHttpRequest();
        posty.responseType = "json";
        posty.open("post", addyurl);
        posty.setRequestHeader("Content-Type", "application/json");
        posty.setRequestHeader("Accept", "application/json;charset=UTF-8");
        let addbody = {
            task: this.state.text,
            userId: this.props.UserId,
            taskId: "",
            dateAdded: "13/05/2019",
            taskStatus: "true"
        }
        addbody = JSON.stringify(addbody);
    
        posty.send(addbody);
    }
   postWrapper=()=>{
       this.addy();
       this.postTask();
       console.log(this.state.addyRefresh+"addyrefresh before rand function")
       this.rand(1);
       console.log("this should trigger a refresh if addyrefresh aint 1");
       console.log(this.state.addyRefresh);
       this.props.callback(this.state.addyRefresh);
   }
render(){
    return(
        <div>
            <form>
        <input type="text" id="addTaskBar" onChange={this.textUpdater}/>
        <button type="button" id="addTaskButton" className="button font" onClick={this.postWrapper} >add tasks</button>
    {/* {this.state.arr.map((arr,i) => <p key={"task"+i} className="tasksBox font">{arr}</p>)} */}
            </form>
        </div>
    );
    }


 }
