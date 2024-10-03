import { useState } from 'react';

//Component
function Square({ value, onSquareClick }){
	return (
		<button 
		className="square"
		onClick={onSquareClick}
		>
		{value}
		</button>
	);
}

//Component
export default function Board() {
  const[squares,setSquares] = useState(Array(9).fill(null));
	
	function handleClick(index) {
		const nextSquares = squares.slice();
		nextSquares[index] = "X";
		setSquares(nextSquares);
	}

//Its now being treated as a function rather than a component and hence an infinite loop
  return(
	  <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={handleClick(0)} />
        <Square value={squares[1]} onSquareClick={handleClick} />
        <Square value={squares[2]} onSquareClick={handleClick} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={handleClick} />
        <Square value={squares[4]} onSquareClick={handleClick} />
        <Square value={squares[5]} onSquareClick={handleClick} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={handleClick} />
        <Square value={squares[7]} onSquareClick={handleClick} />
        <Square value={squares[8]} onSquareClick={handleClick} />
      </div>
	  </>
  );
}
