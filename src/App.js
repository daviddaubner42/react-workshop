import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      "tasks": [
        // {
        //   "title": "Odid",
        //   "done": false,
        // },
        // {
        //   "title": "Ostan",
        //   "done": true,
        // },
      ],
    }; 
  }

  addTask(){
    let taskTitle = prompt("Enter title")
    this.setState((oldState) => ({
      tasks: [...oldState.tasks, {title: taskTitle, done: false}]
    }))
  }

  removeTask(){
    this.setState((oldState) => ({
      tasks: oldState.tasks.slice(0,oldState.tasks.length-1)
    }))
  }

  render() {
    return (
      <main className="container">

        <div className="jumbotron" style={{height: 200, padding: 30}}>
            
            <h1 className="display-4" style={{textAlign: 'center'}}>ToDo List</h1>
            
            <p class="lead" style={{textAlign: 'center'}}>Number of tasks: {this.state.tasks.length}</p>
            
            <div class="btn-group" role="group" aria-label="Basic example" style={{width:'100%'}} >
		          
		          <button type="button" class="btn btn-success" style={{width: '33%'}} onClick={
			          () => this.addTask()
			        }>Add</button>

			        <button type="button" class="btn btn-dark" style={{width: '34%'}}>Modify</button>

		          <button type="button" class="btn btn-danger" style={{width: '33%'}} onClick={
			          () => this.removeTask()
			        }>Remove</button>
		        
		        </div>
        </div>

        <p></p>

        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col" style={{textAlign: 'center'}}>#</th>
              <th scope="col" style={{textAlign: 'center'}}>Title</th>
              <th scope="col" style={{textAlign: 'center'}}>Done?</th>
            </tr>
          </thead>
            
            {this.state.tasks.map((task, i) => (
            	<tbody>
            	{task.done ? (
            		<tr className="table-success">
	            		<td style={{textAlign: 'center'}}>{i+1}</td>
	                <td style={{textAlign: 'center'}}>{task.title}</td>
	                <td style={{textAlign: 'center'}}>	<p>&#10004;</p> </td>
            		</tr>	
          		) : (
								<tr className="table-danger">
	            		<td style={{textAlign: 'center', height: 15}}>{i+1}</td>
	                <td style={{textAlign: 'center'}}>{task.title}</td>
	                <td style={{textAlign: 'center'}}>	<p style={{margin: 0}}>&#10005;</p> </td>
            		</tr>	
          		)}
            	</tbody>

              // <tr>
              //   <td style={{textAlign: 'center'}}>{i+1}</td>
              //   <td style={{textAlign: 'center'}}>{task.title}</td>
              //   <td style={{textAlign: 'center'}}>{task.done ? (<p>&#10004;</p>) : (<p>&#10005;</p>)}</td>
              // </tr>
            ))}

        </table>

      </main>
    );
  }
}

export default App;
