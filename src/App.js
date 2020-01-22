import React from 'react';
import randomColor from 'randomcolor';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      value : '',
      todosList : [],
      date : new Date()    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleClick.bind(this);
  }

  handleClick(event){
    this.setState({
      value : event.target.value
        })
  }
  
  handleSubmit(event){
    event.preventDefault();
    var todo = this.state.value.trim();
    if( todo.length >0){
      this.setState({
        todosList: this.state.todosList.concat(todo),
        value : ''      
      })
    }
  }

  deleteEvent(args){
    let editTodos = this.state.todosList.filter((todo)=>{ return todo !== args.id})
    this.setState({
      todosList : editTodos    
    })
  }

  render(){
    let { todosList } = this.state;
    let pandingItem = todosList.length;
    let color = randomColor();
    let Todo = todosList.map( (event)=>{
      return( 
        <div className="card" key = { Math.random() } style = {{ width : "40%" ,marginLeft :"30%"}}>
            <h5 className="card-header" style ={{ color : color}}>Date-{ this.state.date.toLocaleDateString()}</h5>
            <div className="card-body">
              <h5 className="card-title">{ event }</h5>
              <button type="submit" className="btn btn-primary "  onClick ={()=>{ this.deleteEvent({ id : event})}}>Done</button>
            </div>
          </div> 
        )
    })
    return(
      <div>
          <div className="jumbotron jumbotron-fluid">
                <div className="container">
              <h1 className="display-4" style ={{ textAlign : "center"}}>ToDo App <span role="img" aria-label="sheep">📅</span></h1>
              <p className="lead" style ={{ textAlign : "center"}} >Simple CRUD ToDo App with React</p>
          </div>
        </div> 
          <form onSubmit ={ this.handleSubmit } >
            <div className="d-flex flex-row" style ={{ marginLeft : "40%"}} >
              <div className="p-2"><input type="text" value ={ this.state.value } onChange ={ this.handleChange } className="form-control" placeholder="Add New Task here..." aria-label="Input group example" aria-describedby="btnGroupAddon" /></div>
              <div className="p-2"><button type="submit" className="btn btn-dark">Add</button></div>
            </div>
          </form>
          <p style ={{ textAlign :"center" }}> You have { pandingItem } pending Tasks</p>

          { Todo }
     </div>
    )
  }
}

export default App;
