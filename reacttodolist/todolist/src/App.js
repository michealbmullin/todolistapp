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
        console.log(this.state.appUserId)
    }
    
    callback=(addyRefresh)=>{
        console.log("callbackfunction")
        console.log(this.state.refreshVar)
        
   this.setState({
       refreshVar:10+addyRefresh
   })
    }
    render() {
        console.log("render started the render")
        console.log(this.state.appUserId)
        if (this.state.appUserId==0){
            console.log("userid invalid")
            return(
                <div>
                    <h1>login page</h1>
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
               
                <AddTasks refreshTrigger={this.callback} />
                <GetTasks/>
               
            </div>
            <div>

            </div>
            </div>
              
        )
    }
}


}


export default App;