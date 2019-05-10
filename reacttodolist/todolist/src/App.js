import React, { Component } from 'react';
import AddTasks from './addTasks';
import GetTasks from './GetTasks';
import LoginSignup from './LoginSignup';

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
        console.log("started the app render")
        console.log(this.state.appUserId)
        if (this.state.appUserId==0){
            console.log("userid invalid")
            return(
                <div>
                    <h1 id="loginHeader">login or Signup</h1>
                    <div>
                    <LoginSignup setAppUserId={this.setAppUserId}/>
                    </div>
                </div>

            )

        }else{
            console.log("user id valid")
            console.log(this.state.appUserId)
        return (
            <div>
            <div>
            <h1 > Todays tasks </h1>
            </div>
            <div>
                <AddTasks callback={this.callback} UserId={this.state.appUserId} />
                <GetTasks UserId={this.state.appUserId}/>
            </div>
            </div>
              
        )
    }
}


}


export default App;