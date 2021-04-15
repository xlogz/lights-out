import logo from './logo.svg';
import Board from './components/Board'
import './App.css';

const BOARD_WIDTH=5;
const BOARD_HEIGHT=5;

function App() {

  function createBoard(w,h){
    const board = [];
    let newRow = [];

    for(var i = 0; i < h; i++){
      for(var b = 0; b < w; b++){
        newRow.push(Math.round(Math.random()) ? true : false);
      }
      board.push(newRow);
      newRow = [];
    }
    return board;
  }

  return (
    <Board
      board={createBoard(BOARD_WIDTH,BOARD_HEIGHT)}
    />
  );
}

export default App;
