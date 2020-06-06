import React from 'react';

const TodoList = ({ items, handleTaskComplete }) => { 
     const genTodoListItems = items.map((item, index) => { // Presentational/Stateless Component
          return <li onClick={handleTaskComplete} key={index}>{item}</li>
     })
     return ( 
          <ul>
               {genTodoListItems}
          </ul>
      );
}
 
export default TodoList;