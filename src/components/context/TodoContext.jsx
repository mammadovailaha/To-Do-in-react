import { createContext, useState } from 'react';
const TodoContext = createContext();

export const ListProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    return (
        <TodoContext.Provider value={{ tasks, setTasks }}>
            {children}
        </TodoContext.Provider>
    );
}
export default TodoContext;