import { useEffect, useState } from "react";

function Square({value, onSquareClick}) {
  return <button className="square" onClick={onSquareClick}>{value}</button>;
}

export default function Board() {
  const [squares, setSquares] =  useState([]);

  useEffect( ()=> {
    fetch("http://localhost:3101/GetGame/d3ada7f0-d02b-499e-b906-136fc0044087")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSquares(data);
      })
      .catch((err) => {
        console.log(err.message)
      });
  }, []);

  function handleClick(i){
    console.log("Clicked " + i)
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
    </>
  )
}