import logo from './logo.svg';
import Board from './components/Board'
import './App.css';

function App() {
  return (
    <Board
      board={[
        [true,false,true,false,true],
        [false,false,true,false,true],
        [true,false,true,false,true],
        [true,true,true,false,true],
        [true,false,true,false,true],
      ]}
    />
  );
}

export default App;
