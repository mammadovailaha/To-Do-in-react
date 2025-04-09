import React, {useContext} from 'react';
import "/src/components/header/Header.css"
import TodoContext from "/src/components/context/TodoContext";




function Header() {
   const context=useContext(TodoContext)
  if(!context){
    console.error("Header component is not inside ListProvider");
    return null;
  }
  const {tasks}=context;
    return (

        <div className="header">
            <div className='logo'>
                <img src="./public/to-do.png" alt="To-do list logo" />
                <h2> To-Do List</h2></div>
            <div className='total_list'><img src="./public/ToDoTotal.png" alt="total list" />
                <span>{tasks.length}</span></div>
        </div>


    )
}
export default Header;