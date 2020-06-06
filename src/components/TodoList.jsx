import React from 'react';

const TodoList = ({ items }) => { 
     const genTodoListItems = items.map((item, index) => { // Presentational/Stateless Component
          return <li  key={index}>{item}</li>
     })
     return ( 
          <ul>
               {genTodoListItems}
          </ul>
      );
}
 
export default TodoList;