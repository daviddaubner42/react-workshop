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

  modifyTask(i){
  	// let i = prompt("Enter task index")-1
  	this.setState((oldState) => ({
  		tasks: oldState.tasks.slice(0,i).concat({title: oldState.tasks[i].title, done: !oldState.tasks[i].done}, oldState.tasks.slice(i+1,oldState.tasks.length))
  	}))
  }

  new(){
  	this.setState((oldState) => ({
  		tasks: [],
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

			        <button type="button" class="btn btn-dark" style={{width: '34%'}} onClick={
			        	() => this.new()
			        }>New List</button>

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
	              	<button onClick={() => this.modifyTask(i)} ><td style={{textAlign: 'center'}}>	<i class="material-icons">done</i> </td></button>
            		</tr>	
          		) : (
								<tr className="table-danger">
	            		<td style={{textAlign: 'center', height: 15}}>{i+1}</td>
	                <td style={{textAlign: 'center'}}>{task.title}</td>
            			<button onClick={() => this.modifyTask(i)} ><td style={{textAlign: 'center'}}>	<i class="material-icons">clear</i> </td></button>
            		</tr>	
          		)}
            	</tbody>

            	//<button onClick={() => this.modifyTask(i)}><td style={{textAlign: 'center'}}>	<p style={{margin: 0}}>&#10005;</p> </td></button>
            	//<button onClick={() => this.modifyTask(i)}><td style={{textAlign: 'center'}}>	<p style={{margin: 0}}>&#10004;</p> </td></button>

            ))}

        </table>

      </main>
    );
  }
}

export default App;
