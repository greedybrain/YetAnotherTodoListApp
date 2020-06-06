import React, { Component } from 'react';
import TodoListForm from '../components/TodoListForm';
import TodoList from '../components/TodoList';

class TodoListContainer extends Component {
     constructor() {
          super()

          this.state = {
               items: []
          }
     }

     handleAddItem = (item) => {
          this.setState({
               items: [...this.state.items, item]
          })
     }

     handleTaskComplete = (e) => {
          e.target.style.textDecoration = "line-through"
          e.target.innerHTML += '<button className="undo-btn">Undo</button>'
     }

     render() {
          const { items } = this.state
          return (
               <>   
                    <TodoListForm handleAddItem={this.handleAddItem} />
                    <TodoList handleTaskComplete={this.handleTaskComplete} items={ items } />
               </>
          );
     }
}

export default TodoListContainer;