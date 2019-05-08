import React, { Component } from 'react';

export default class LoginSignup extends Component{
    constructor(props){
        super(props);
        this.state={
            logginArr:[],
            userId:0,
            subEmail:"",
            subPasswd:""
        }
    }
    verifyLogin=(e)=>{
        e.preventDefault();
        let url = "http://localhost:8585/api/v1/User/validate"
        let verify = new XMLHttpRequest();
        verify.open('post', url)
        verify.setRequestHeader("Content-Type", "application/json");
        verify.setRequestHeader("Accept", "application/json;charset=UTF-8");
        let body = {
            email:this.state.subEmail,
            password:this.state.subPasswd
        }
        body = JSON.stringify(body);
        verify.onload = () => {
            this.setState({
                userId:verify.response
            });
            console.log("userId retrieved")
            console.log (this.state.userId)
            if (this.state.userId===0){
                window.alert("scuffed");
            }
            this.props.setSeshUserId();
        }
        verify.send(body);
    }
    // submitEvent=(event)=>({
    //    event.preventDefault();
    //    this.verifyLogin();
    //     })
    emailUpdater=(inp)=>{
        this.setState({
            subEmail:inp.target.value
        })
    }
    passUpdater=(inp)=>{
        this.setState({
            subPasswd:inp.target.value
        })
    }
    userSignup=()=>{
        let addyurl = "http://localhost:8585/api/v1/User";
        let posty = new XMLHttpRequest();
        posty.responseType = "json";
        posty.open("post", addyurl);
        posty.setRequestHeader("Content-Type", "application/json");
        posty.setRequestHeader("Accept", "application/json;charset=UTF-8");
        let signupbody = {
            userId:"",
            email:this.state.subEmail,
            password:this.state.subPasswd
        }
        signupbody= JSON.stringify(signupbody);
        posty.send(signupbody);
    }

    render(){
        return(
            <div>
                <h2>login</h2>
            <form onSubmit={this.verifyLogin}>
                    <input type="email" key="emailaddress" placeholder="please enter your email adress" onChange={this.emailUpdater}/>
                    <input type="password" key="password" placeholder="please enter your password" onChange={this.passUpdater}/>
                    <input type="submit"/>
            </form>
            <div>
                placeholder for signup
            </div>
            </div>
        )
    }
}