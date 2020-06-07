import React from 'react';

const TodoList = ({ items, handleDeleteItem }) => { 

     function handleTodoListAction(e) {
          switch (e.target.nodeName) {
               case "SPAN":
                    let taskItemLi = e.target
                    taskItemLi.style.textDecoration = "line-through"
                    taskItemLi.innerHTML += "<button className='undo-btn'>Undo</button>"
                    break;
               case "BUTTON":
                    switch (e.target.textContent) {
                         case "Undo":
                                   let undoButton = e.target
                                   undoButton.parentElement.style.textDecoration = "none"  
                                   undoButton.remove()
                              break;
                         case "Delete":
                              let deleteButton = e.target
                              const itemText = deleteButton.parentElement.parentElement.parentElement.firstElementChild.textContent
                              handleDeleteItem(itemText)
                              break;
                         default:
                              break;
                    }
                    break;
               default:
                    break;
               case "I":
                    let deleteButton = e.target
                    const itemText = deleteButton.parentElement.parentElement.parentElement.firstElementChild.textContent
                    handleDeleteItem(itemText)
                    break;
          }
     }

     const genTodoListItems = items.map((item, index) => { // Presentational/Stateless Component
          return (
               <li key={index}>
                    <div className="todo-text">
                         <span onClick={handleTodoListAction}>{item}</span>
                    </div>
                    <div className="delete">
                         <button className="delete-btn"><i onClick={handleTodoListAction} className="fas fa-trash-alt delete-btn"></i></button>
                    </div>
               </li>
          )
     })

     return ( 
          <ul className="todo-list">
               <h2>My Todo List</h2>
               {genTodoListItems}
          </ul>
      );
}
 
export default TodoList;