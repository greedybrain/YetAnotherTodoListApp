import React, { Component } from 'react';

class TodoListForm extends Component { // Cont/Pres Stateful
     constructor() {
          super()

          this.state = {
               itemInput: ''
          }
     }

     handleOnChange = e => {
          this.setState({
               [e.target.name]: e.target.value
          })
     }

     handleOnSubmit = e => {
          e.preventDefault()

          // Extract handleAddItem function from TodoListContainer via props 
          const { handleAddItem } = this.props
          // Extract itemInput from TodoListForm state
          const { itemInput } = this.state
          
          handleAddItem(itemInput)
          
          this.setState({
               itemInput: ''
          })

          e.target.reset()
     }

     render() {
          return (
               <>
                    <form
                         onChange={this.handleOnChange}
                         onSubmit = { this.handleOnSubmit }>
                         <input
                              type="text"
                              placeholder="Enter Todo Task"
                              name="itemInput"
                         />
                         <button type="submit">Add</button>
                    </form>
               </>
          );
     }
}

export default TodoListForm;