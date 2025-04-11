
import React, { useState, useContext} from "react";
import "/src/components/listContainer/ListContainer.css";
import TodoContext from "/src/components/context/TodoContext";
import { FaEye } from "react-icons/fa6";
import Modal from "/src/components/modal/Modal";


function ListContainer() {

    const { list, setList } = useContext(TodoContext);
    const [inputValue, setInputValue] = useState("");
    const [isChecked, setIsChecked] = useState(list.map(()=>true));
    console.log({ inputValue });


    const handleCheckedbox = (e, index) => {
        const newCheckedState=[...isChecked];
        newCheckedState[index]=e.target.checked;
        setIsChecked(newCheckedState);
        if (isChecked) {
            e.target.nextElementSibling.style.textDecoration = "line-through";
        } else {
            e.target.nextElementSibling.style.textDecoration = "none";
        }
    };


    const removeTask = (itemIndex) => {
        setList((prev) => prev.filter((_, index) => index !== itemIndex));
        setIsChecked((prev)=>prev.filter((_,index)=>index !==itemIndex));
    };
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  
    return (
        <form className="container"

            onSubmit={(e) => {
                if (inputValue.trim() === "") 
                    return alert("You cannot add an empty task!")
                e.preventDefault();
                setList((prev) => [...prev, inputValue]);
                setIsChecked((prev)=>[...prev,false]);
                setInputValue("");

            }}

        >
            <div className="add_task_section">
                <div className="add_task_input"><input
                    type="text"
                    placeholder='What is your next task?'
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                />
                </div>
                <button className='add_btn' type="submit">Add</button>
            </div>
            <div className="all_list">
                <ul >
                    {list?.map((item, index) => (
                        <li key={index}>
                            <div className="list">
                                <div className="task">
                                    <input type="checkbox" 
                                    checked={isChecked[index]}
                                    onChange={(e)=>handleCheckedbox(e,index)}
                                    />
                                    <p>{item}</p>
                                </div>
                                <div className="actions">
                                    <FaEye className="openModalIcon" onClick={openModal}/>
                                <button className="delete_btn" onClick={() => removeTask(index)}>Delete</button>
                                </div>
                               {isModalOpen && <Modal closeModal={closeModal}/>}
                            </div>
                        </li>
                    ))} 
                </ul>
            </div>
        </form >

    )
}
export default ListContainer;  
