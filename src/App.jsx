import React from 'react'
import './App.css'
import ListContainer from '/src/components/listContainer/ListContainer.jsx'
// import ListContext from '/src/components/context/ListContext.jsx';
import Header from '/src/components/header/Header.jsx';


function App() {
  
// const [list, setList] = useState([]);

  return (
    <div className="App">
      {/* <ListContext.Provider value={[list, setList]}> */}
        < Header />
        <ListContainer />
{/* 
      </ListContext.Provider> */}

    </div>
  )
}

export default App;
