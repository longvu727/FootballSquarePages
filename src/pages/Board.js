import { useEffect, useState } from "react";
import { SquareRow } from "../components/SquareRow";
import { sortByNumber } from "../util/Sorts";
import "../css/board.css"

const getGameURL = 'http://localhost:3101/GetGame/';
export default  function Board({game, user}) {
  const [boardData, setBoardData] = useState(null)
  const [squareReserve, setSquareReserve] = useState(null)

  const fetchBoardData = async() => {
    fetch(getGameURL + game).
        then((response)=>response.json()).
        then((json)=> setBoardData(json));
  };

  useEffect(()=>{ fetchBoardData(); }, [game])

  useEffect(()=>{
    console.log(squareReserve)
    fetchBoardData();
  }, [squareReserve])

  if(!boardData) {
    return;
  }

  const rows = [];
  const squaresRowsColumns = toSquareRowsColumns(boardData.football_squares);
  const gameGUID = boardData.game_guid;

  for (let rowI of Object.keys(squaresRowsColumns).sort(sortByNumber)) {
    rows.push(<SquareRow key={rowI} row={squaresRowsColumns[rowI]} game={gameGUID} user={user} setSquareReserve={setSquareReserve} />);
  }
  
  return <>
    <div className="boardContainer">
      <div className="teamA"> {boardData && boardData.team_a} </div>
      <div className="squares"> {rows.length > 0 && rows} </div>
      <div className="teamB"> {boardData && boardData.team_b} </div>
    </div>
  </>;
  
}

function toSquareRowsColumns(squares) {
    const squaresRowsColumns = {};

    for (let i = 0; i < squares.length; i++) {
        let square = squares[i];
        if (typeof squaresRowsColumns[square.row_index] === 'undefined') {
            squaresRowsColumns[square.row_index] = {};
        }
        squaresRowsColumns[square.row_index][square.column_index] = square;
    }
    return squaresRowsColumns;
}