import React, { useEffect, useState } from 'react';
import Board from './components/Board'
import './App.css';

const BOARD_WIDTH=5;
const BOARD_HEIGHT=5;

function App() {
  const [ board, setBoard ] = useState(createBoard(BOARD_WIDTH, BOARD_HEIGHT));

  useEffect( ()=>{

  },[board])

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

  function toggleTiles(originalBoard, x, y){
    originalBoard[y][x] = !originalBoard[y][x];
    if(y < BOARD_HEIGHT - 1){
      originalBoard[y+1][x] = !originalBoard[y+1][x];
    }
    if(y > 0){
      originalBoard[y-1][x] = !originalBoard[y-1][x];
    }
    if(x < BOARD_WIDTH - 1){
      originalBoard[y][x+1] = !originalBoard[y][x+1];
    }
    if(x > 0){
      originalBoard[y][x-1] = !originalBoard[y][x-1];
    }
    const newBoard = [...originalBoard];
  
    setBoard(newBoard);
  }

  return (
    <Board
      board={board}
      toggleTiles={toggleTiles}
    />
  );
}

export default App;
