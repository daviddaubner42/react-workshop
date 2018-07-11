import React, { Component } from 'react';
import './App.css';

class RowDone extends Component {

	render() {
    return (
  		<tr className="table-success">
    		<td style={{textAlign: 'center'}}>{this.props.index+1}</td>
        <td style={{textAlign: 'center'}}>{this.props.task.title}</td>
      	<td onClick={() => this.props.click} style={{textAlign: 'center'}}>	<i class="material-icons">done</i> </td>
  		</tr>	
  	)
  }
}

class RowTodo extends Component {

	render() {
    return (
  		<tr className="table-danger">
    		<td style={{textAlign: 'center'}}>{this.props.index+1}</td>
        <td style={{textAlign: 'center'}}>{this.props.task.title}</td>
      	<td onClick={() => this.props.click} style={{textAlign: 'center'}}>	<i class="material-icons">clear</i> </td>
  		</tr>	
  	)
  }
}

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

  deleteTask(i){
  	this.setState((oldState) => {
  		return {
  			...oldState,
  			tasks: oldState.tasks.slice(0,i).concat(oldState.tasks.slice(i+1,oldState.tasks.length)),
  		}
  	})
  }

  modifyTitle(i){
  	let newTitle = prompt("Enter new title")
  	this.setState((oldState) => ({
  		tasks: oldState.tasks.slice(0,i).concat({title: newTitle, done: oldState.tasks[i].done}, oldState.tasks.slice(i+1,oldState.tasks.length))
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

        <div className="jumbotron" style={{height: 160, padding: 30}}>
            
            <h1 className="display-4" style={{textAlign: 'center'}}>ToDo List</h1>
            
            <p class="lead" style={{textAlign: 'center'}}>Number off tasks: {this.state.tasks.length}</p>
            
        </div>

        <p></p>

        <table className="table">
          <thead className="thead-dark">
            <tr>
            	<th scope="col" style={{textAlign: 'center'}}>Delete?</th>
              <th scope="col" style={{textAlign: 'center'}}>#</th>
              <th scope="col" style={{textAlign: 'center'}}>Title</th>
              <th scope="col" style={{textAlign: 'center'}}>Done?</th>
            </tr>
          </thead>
            
            {this.state.tasks.map((task, i) => (
            	
            	<tbody>
            	{task.done ? (
            		<tr className="table-success">
            			<td style={{textAlign: 'center'}} ><button onClick={() => this.deleteTask(i)} type="button" className="btn btn-danger" > X </button></td>
								 	<td style={{textAlign: 'center'}}> {i+1} </td>
								 	<td onClick={() => this.modifyTitle(i)} style={{textAlign: 'center'}}>{task.title}</td>
									<td onClick={() => this.modifyTask(i)} style={{textAlign: 'center'}}>	<i class="material-icons">done</i> </td>            		
								</tr>	
          		) : (
          			<tr className="table-danger">
								 	<td style={{textAlign: 'center'}} ><button onClick={() => this.deleteTask(i)} type="button" className="btn btn-danger" > X </button></td>
								 	<td style={{textAlign: 'center'}}> {i+1} </td>
								 	<td onClick={() => this.modifyTitle(i)} style={{textAlign: 'center'}}>{task.title}</td>
									<td onClick={() => this.modifyTask(i)} style={{textAlign: 'center'}}>	<i class="material-icons">clear</i> </td>            		
								</tr>
          		)}
            	</tbody>


            ))}

        </table>

        <div class="btn-group" role="group" aria-label="Basic example" style={{width:'100%'}} >
          
          <button type="button" class="btn btn-success" style={{width: '50%'}} onClick={
	          () => this.addTask()
	        }>Add</button>

          <button type="button" class="btn btn-danger" style={{width: '50%'}} onClick={
	          () => this.new()
	        }>Delete All</button>
        
        </div>

      </main>
    );
  }
}

// <RowDone task={task} index={i} click={this.modifyTask(i)} />

export default App;




// <tr className="table-danger">
//  <td style={{textAlign: 'center', height: 15}}>{i+1}</td>
//  <td style={{textAlign: 'center'}}>{task.title}</td>
// 	<td className="done" onClick={() => this.modifyTask(i)} style={{textAlign: 'center'}}>	<i class="material-icons">clear</i> </td>            		
// </tr>	

// <tr className="table-success">
// 	<td style={{textAlign: 'center'}}>{i+1}</td>
//  <td style={{textAlign: 'center'}}>{task.title}</td>
//  <td className="done" onClick={() => this.modifyTask(i)} style={{textAlign: 'center'}}>	<i class="material-icons">done</i> </td>
// </tr>	

// <button type="button" class="btn btn-dark" style={{width: '34%'}} onClick={
// 	() => this.new()
// }>New List</button>