import React from "react";
import { useState } from "react";
import "/src/components/listContainer/ListContainer.css";
// // import ListContext from "/src/components/context/ListContext.jsx";
// import List from "/src/components/List.jsx";

function ListContainer() {
 
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState("");
    // const [list, setList]=useContext(ListContext);
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckedbox = (e) => {
        setIsChecked(e.target.checked);
        if (isChecked) {
            e.target.parentElement.style.textDecoration = "line-through";
        } else {
            e.target.parentElement.style.textDecoration = "none";
        }
    };

    const removeTask = (index) => {
        const newTasks = tasks.filter((task, i) => i !== index);
        setTasks(newTasks);
    };

   

    return (
        <form className="container" onSubmit={(e) => {
            e.preventDefault();
            if (inputValue.trim() === " ") {
                alert("Please enter a task")
            }
            else {
                setTasks([...tasks, inputValue]);
              
                setInputValue("");
                e.target.reset();
              
            }
        }}>
            <div className="add_task_section">
                <div className="add_task_input"><input
                    type="text"
                    placeholder='What is your next task?'
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                /></div>
                <button className='add_btn' type="submit">Add</button>
                <button className="total_btn">Total</button>
            </div>
            <div className="all_list">
            <ul >
        {tasks.map((tasks, index) => (
            <li key={index}>
                <div className="list">
                    <div className="task">
                        <input type="checkbox" onClick={handleCheckedbox} />
                        <p>{tasks}</p>
                    </div>
                    <button className="delete_btn" onClick={() => removeTask(index)}>Delete</button>
                </div>
            </li>
        ))}
    </ul>
    </div>
        </form>

    );
}
export default ListContainer;