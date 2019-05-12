import React, { Component } from 'react';
import AddTasks from './addTasks';
import GetTasks from './GetTasks';
import LoginSignup from './LoginSignup';
import './Main.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            refreshVar:0,
            appUserId:0
        }
    }
    setAppUserId = (passedUsrId) => {
        this.setState({
            appUserId:passedUsrId
        })
    }
    callback = (passedrefreshvar) => {
   this.setState({
       refreshVar:passedrefreshvar
   })
    }
    render() {
        if (this.state.appUserId==0){
            console.log("userid invalid")
            console.log("refreshvar "+this.state.refreshVar)
            return(
                <div className="pageBody">
                    <h1 id="loginHeader" className="font header">Welcome to todos</h1>
                    <div id="signInWrap" className="maxWidthWrap">
                    <LoginSignup setAppUserId={this.setAppUserId}/>
                    </div>
                </div>
            )

        }else{
            console.log("user id valid this.state.appUserId")
            console.log("refreshvar "+this.state.refreshVar)
        return (
            <div className="pageBody">
            <div>
            <h1 id="taskHeader" className="font header"> Todays tasks </h1>
            </div>
            <div id="tasksBlock" className="maxWidthWrap">
                <AddTasks id="addTaskField" callback={this.callback} UserId={this.state.appUserId} />
                <GetTasks UserId={this.state.appUserId} refreshVar={this.state.refreshVar}/>
            </div>
            </div>
              
        )
    }
    
}


}


export default App;