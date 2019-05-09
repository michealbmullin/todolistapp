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
            if (this.state.userId===0|this.state.userId===undefined){
                window.alert("scuffed");
            }
            this.props.setAppUserId(this.state.userId);
        }
        verify.send(body);
    }
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
        let addyurl = "http://localhost:8585/api/v1/UserSignup";
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
        posty.onload=()=>{
            if(posty.response==null){
            alert("That username is already taken");
            }
            else{
                alert("Login Succesfull");
            }
        }
    }

    render(){
        return(
            <div>
                <div>
                <h2>login</h2>
            <form>
                    <input type="email" key="emailaddress" placeholder="please enter your email adress" onChange={this.emailUpdater}/>
                    <input type="password" key="password" placeholder="please enter your password" onChange={this.passUpdater}/>
                    <button type="button" onClick={this.verifyLogin}>login</button>
                    <button type="button" onClick={this.userSignup}> signup</button>
            </form>
            </div>
            <div>
               <h2>signup</h2>
               <form>
               </form>
            </div>
            </div>
        )
    }
}