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
    verifyLogin=()=>{
        let url = "http://localhost:8585/api/v1/User/validate"
        let verify = new XMLHttpRequest();
        verify.open('GET', url)
        verify.responseType = "json";
        verify.onload = () => {
            this.setState({
                loginArr: verify.response,
                userId:logginArr.userId
            });

        }
        verify.send();
    }
    submitEvent=event=>{
        preventDefault();
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
        let signupbody= JSON.stringify(signupbody);
        posty.send(signupbody);
    }

    render(){
        return(
            <div>
            <form onSubmit={this.submitEvent}>
                    <input type="email" key="emailaddress" placeholder="please enter your email adress"/>
                    <input type="password" key="password" placeholder="please enter your password"/>
                    <input type="submit"><button>submit</button></input>
            </form>
            </div>
        )
    }
}