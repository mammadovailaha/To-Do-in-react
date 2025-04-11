import React from "react";
import { createContext, useState, useEffect } from 'react';
const TodoContext = createContext();

export const ListProvider = ({ children }) => {
    const [list, setList] = useState(() => {
        const savedList = localStorage.getItem("list");
        return savedList ? JSON.parse(savedList) : [];
    });
      
    useEffect(() => {

        localStorage.setItem("list", JSON.stringify(list));
    }, [list]);

    return <TodoContext.Provider value={{ list, setList }}>
        {children}
    </TodoContext.Provider>;
};

export default TodoContext;