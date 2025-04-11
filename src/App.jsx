import React  from 'react'
import './App.css'
import ListContainer from '/src/components/listContainer/ListContainer.jsx'
import Header from '/src/components/header/Header.jsx';
import TodoContext from './components/context/TodoContext';
import { ListProvider } from './components/context/TodoContext';

function App() {


  return (
    <ListProvider>
      <div className="App">
        < Header />
        <ListContainer/>
      </div>
    </ListProvider>
  );
}

export default App;
