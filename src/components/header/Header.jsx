import "/src/components/header/Header.css"
import React from 'react';
// import ListContext from '../context/ListContext.jsx';

function Header() {
   
    // const { list } = useContext(ListContext);


    return (

        <div className="header">
            <div className='logo'>
                <img src="./public/to-do.png" alt="To-do list logo" />
                <h2> To-Do List</h2></div>
            <div className='total_list'><img src="./public/ToDoTotal.png" alt="total list" />
                <span>0</span></div>
        </div>


    )
}
export default Header;