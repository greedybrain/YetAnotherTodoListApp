import React, { Component } from 'react';
import TodoListItems from '../components/TodoListItems';

class TodoList extends Component { //Container
     render() {
          return (
               <div>
                    <TodoListItems />
               </div>
          );
     }
}

export default TodoList;