import React, { Component } from 'react';
import AddTasks from './addTasks';
import GetTasks from './GetTasks';

class App extends Component {

    render() {
        return (
            <div>
            <div>
            <h1 > Todays tasks </h1>
            </div>
            <div>
                <GetTasks/>
                <AddTasks/>
            
            </div>
            <div>

            </div>
            </div>
              
        )
    }
    


}


export default App;