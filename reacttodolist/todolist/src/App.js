import React, { Component } from 'react';
import AddTasks from './addTasks';
import GetTasks from './GetTasks';



class App extends Component {
    constructor(props){
        super(props);
        this.state={
            refreshVar:0,
            seshuserid:0
        }
    }
    
    callback=(addyRefresh)=>{
        console.log(this.state.refreshVar)
   this.setState({
       refreshVar:10+addyRefresh
   })
//    console.log(this.state.refreshVar)
    }

    render() {
        if (this.state.seshuserid===0){
            return(
                <div>
                    <h1>login page</h1>
                    <div>
                    
                    </div>
                </div>

            )

        }else{
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