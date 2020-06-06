import React from 'react';
import DeleteButton from './DeleteButton';


const TodoList = ({ items }) => { 

     function handleTodoListActions(e) {
          switch (e.target.nodeName) {
               case "LI":
                    let taskItemLi = e.target
                    taskItemLi.style.textDecoration = "line-through"
                    taskItemLi.innerHTML += "<button className='undo-btn'>Undo</button>"
                    break;
               case "BUTTON":
                    let undoButton = e.target
                    undoButton.parentElement.style.textDecoration = "none"  
                    undoButton.remove()
                    break;
               default:
                    break;
          }
     }

     const genTodoListItems = items.map((item, index) => { // Presentational/Stateless Component
          return (
               <li onClick={handleTodoListActions} key={index}>
                    {item}
                    <DeleteButton />
               </li>
          )
     })

     return ( 
          <ul>
               {genTodoListItems}
          </ul>
      );
}
 
export default TodoList;