import React from 'react'
import './App.css'
import ListContainer from '/src/components/listContainer/ListContainer.jsx'
import Header from '/src/components/header/Header.jsx';
import TodoContext from './components/context/TodoContext';
import { ListProvider } from "/src/components/context/TodoContext.jsx";

function App() {




  return (
    <TodoContext.Provider >
      <div className="App">
        < Header />
        <ListContainer /> 
      </div>
      </TodoContext.Provider>
  );
}

export default App;
