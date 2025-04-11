import React, {useContext} from 'react';
import "/src/components/header/Header.css"
import TodoContext from "/src/components/context/TodoContext";
import ListContainer from '/src/components/listContainer/ListContainer';



function Header() {
   const {list}=useContext(TodoContext);

  const listLength=list.length;

console.log("List Length:", listLength); 

    return (

        <div className="header">
            <div className='logo'>
                <img src="./public/to-do.png" alt="To-do list logo" />
                <h2> To-Do List</h2></div>
            <div className='total_list'><img src="./public/ToDoTotal.png" alt="total list" />
                <span>{listLength}</span></div>
            
               
        </div>


    )
}
export default Header;
