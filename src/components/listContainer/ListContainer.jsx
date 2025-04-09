
import React, { useState, useContext } from "react";
import "/src/components/listContainer/ListContainer.css";
import TodoContext from "../context/TodoContext";


function ListContainer() {

    const [tasks, setTasks] = useContext(TodoContext);
    const [inputValue, setInputValue] = useState("");
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
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };


    return (
        <form className="container" onSubmit={(e) => {
            e.preventDefault();
            if (inputValue.trim() === " ") {
                alert("Please enter a task")
            }
            else {
                setTasks([{ ...tasks, inputValue }]);
                setInputValue("");
                e.target.reset();


            }
        }}
        >
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
                    {tasks.map((task, index) => (
                        <li key={index}>
                            <div className="list">
                                <div className="task">
                                    <input type="checkbox" onClick={handleCheckedbox} />
                                    <p>{task}</p>
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