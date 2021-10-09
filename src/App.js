import SimpleList from './components/SimpleList';

const myList = ["a", "b", "c", "d", "e", "f"]


function App() {
  return (
    <div className="App">
      <SimpleList list={myList} />
    </div>
  );
}

export default App;
