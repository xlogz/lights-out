import React, { useEffect, useState } from 'react';
import Board from './components/Board';
import Modal from './components/Modal';
import Counter from './components/Counter';
import { getByPlaceholderText } from '@testing-library/dom';


const BOARD_WIDTH=5;
const BOARD_HEIGHT=5;

function App() {
  const [ board, setBoard ] = useState(createBoard(BOARD_WIDTH, BOARD_HEIGHT));
  useEffect( ()=>{
    if(checkWin(board)){
      setWinStatus(true);
    }
  },[board])

  const [ winStatus, setWinStatus ] = useState(false);
  const [ moves, setMoves ] = useState(0);

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
    setMoves(moves + 1);
    setBoard(newBoard);
  }

  function testWin(originalBoard, x, y){
    const result = [];
    let newRow = [];
    for(var i = 0; i < BOARD_WIDTH; i++){
      for(var b = 0; b < BOARD_HEIGHT; b++){
        newRow.push(false);
      }
      result.push(newRow);
      newRow = [];
    }
    setBoard(result);
    
  }

  function checkWin(board){
    let allOff = true;
    for(var i = 0; i < board.length; i++){
      for(var b= 0; b < board[i].length; b++){
        if(board[i][b] === true){
          allOff = false;
        }
      }
    }
  return allOff;
  }

  function restartBoard(){
    setBoard(createBoard(BOARD_WIDTH, BOARD_HEIGHT));
    setWinStatus(false);
    setMoves(0);
  }

  return (
    <div style={styles.wrapper}>
      <div>
        <Board
          board={board}
          toggleTiles={toggleTiles}
        />

        <Counter 
          count={moves}
        />

        <button onClick={restartBoard} style={styles.restartButton}>Restart</button>
        
        <Modal
          won={winStatus}
          moves={moves}
          restartBoard={restartBoard}
        />
      </div>
    </div>
    
  );
}

const styles = {
  restartButton: {
    float: 'right',
    backgroundColor: 'white',
    border: '3px solid black',
    borderRadius: '5px',
    fontWeight: '700',
    fontSize: '14px',
  },
  wrapper: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default App;
