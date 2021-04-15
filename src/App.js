import React, { useEffect, useState } from 'react';
import Board from './components/Board'
import './App.css';

const BOARD_WIDTH=5;
const BOARD_HEIGHT=5;

function App() {


  const [ board, setBoard ] = useState(createBoard(BOARD_WIDTH, BOARD_HEIGHT));

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

  function updateIndividualTile(originalBoard, x, y){
    originalBoard[y][x] = !originalBoard[y][x];
    console.log(originalBoard);
  }


  return (
    <Board
      board={board}
      updateIndividualTile={updateIndividualTile}
    />
  );
}

export default App;
