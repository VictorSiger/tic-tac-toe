import { useState } from "react"
import Square from "./Square"
import IsWinner from "./IsWinner"
import './board.css'

export default function Board({xIsNext, squares, onPlay}) {

function handleClick(i) {
     if (squares[i] || IsWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
     if (xIsNext) {
       nextSquares[i] = "X";
     } else {
       nextSquares[i] = "O";
     }
    onPlay(nextSquares)
  }

   const winner = IsWinner(squares);
   let status;
   if (winner) {
     status = "Winner: " + winner;
   } else {
     status = "Next player: " + (xIsNext ? "X" : "O");
   }

    return (
        <>
        <div className="containerAll">
        <div className="status">{status}</div>
        <div className="board-row container-fluid" style={{height: '50px'}}>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
        </div>
        <div className="board-row container" style={{height: '50px'}}>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
        </div>
        <div className="board-row container" style={{height: '50px'}}>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
        </div>
        </div>
        </>
    )
}