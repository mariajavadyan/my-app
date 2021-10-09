import React from 'react';
import ListWithAddItem from './components/ListWithAddItem';
import SimpleList from './components/SimpleList';
import ListWithRemoveItem from './components/ListWithRemoveItem';
import ListWithComponents from './components/ListWithComponents';



  const myList = ["a", "b", "c", "d", "e", "f","g"]


  function App() {
    return (
      <div className="App">
        <div>
          <h3> Simple List </h3>
          <SimpleList list={myList} />
        </div>
          <div>
          <h3> List with Add Item Functionality </h3>  
            <ListWithAddItem/>
          </div>
          <div>
              <h3>List With Remove Item</h3>
              <ListWithRemoveItem/>
          </div>
          <div>
              <h3>List with Components</h3>
              <ListWithComponents/>
          </div>
      </div>
    );
  }
  export default App;


