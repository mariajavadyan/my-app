import SimpleList from './components/SimpleList';

const users = [
  {
    id: 'a',
    firstname: 'Robin',
    lastname: 'Wieruch',
    year: 1988,
  },
  {
    id: 'b',
    firstname: 'Dave',
    lastname: 'Davidds',
    year: 1990,
  },
];


function App() {
  return (
    <div className="App">
      <SimpleList list={myList} />
    </div>
  );
}

export default App;
