import React, { Component } from 'react';
import TodoListItems from './TodoListItems';

class TodoListForm extends Component {
     constructor() {
          super()

          this.state = {
               item: '',
               items: []
          }
     }

     handleOnChange = e => {
          this.setState({
               [e.target.name]: e.target.value
          })
     }

     handleOnSubmit = e => {
          e.preventDefault()

          const { item, items } = this.state
          this.setState({
               item: '',
               items: [...items, item]
          })
          e.target.reset()
     }

     render() {
          return (
               <>
                    <form onSubmit={this.handleOnSubmit}>
                         <input
                              onChange={this.handleOnChange}
                              type="text"
                              placeholder="Enter Todo Task"
                              name="item"
                         />
                         <button type="submit">Add</button>
                    </form>
                    <TodoListItems items={this.state.items} />
               </>
          );
     }
}

export default TodoListForm;