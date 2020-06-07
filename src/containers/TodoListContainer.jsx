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

     getItems() {
          const { items } = this.state
          return items
     }

     handleAddItem = (item) => {
          this.setState({
               items: [...this.getItems(), item]
          })
     }

     handleDeleteItem = (todoItem) => {
          const keptItems = this.getItems().filter(item => item !== todoItem)
          this.setState({
               items: keptItems
          })
     }

     render() {
          return (
               <>   
                    <TodoListForm handleAddItem={this.handleAddItem} />
                    <TodoList handleDeleteItem={this.handleDeleteItem} items={ this.getItems() } />
               </>
          );
     }
}

export default TodoListContainer;