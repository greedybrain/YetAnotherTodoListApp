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

     render() {
          const { items } = this.state
          return (
               <>   
                    <TodoListForm handleAddItem={this.handleAddItem} />
                    <TodoList items={ items } />
               </>
          );
     }
}

export default TodoListContainer;