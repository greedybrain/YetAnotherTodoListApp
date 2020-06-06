import React from 'react';

const TodoListItems = ({ items }) => {
     const genTodoListItems = items.map((item, index) => { // Presentational/Stateless Component
          return <li key={index}>{item}</li>
     })
     return ( 
          <ul>
               {genTodoListItems}
          </ul>
      );
}
 
export default TodoListItems;