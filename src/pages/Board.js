import { useEffect, useState } from "react";

import { SquareRow } from "../components/SquareRow";
import { sortByNumber } from "../util/Sorts";
import "../css/board.css"

const gameHost = 'localhost:3101';
const getGameAPI = '/GetGame/';
const subscribeGetGameAPI = '/Subscribe/GetGame/';

export default  function Board({game, user}) {
  const [boardData, setBoardData] = useState(null)

  useEffect(()=>{ 
    // Create WebSocket connection.
    const socket = new WebSocket("ws://" + gameHost + subscribeGetGameAPI + game);

    // Connection opened
    socket.addEventListener("open", (event) => {
      console.log("Opened");
    });

    // Listen for messages
    socket.addEventListener("message", (event) => {
      const response = JSON.parse(event.data);

      setBoardData(response)
    });

  }, [])

  if(!boardData) {
    return;
  }

  const rows = [];
  const squaresRowsColumns = toSquareRowsColumns(boardData.football_squares);
  const gameGUID = boardData.game_guid;

  for (let rowI of Object.keys(squaresRowsColumns).sort(sortByNumber)) {
    rows.push(<SquareRow key={rowI} row={squaresRowsColumns[rowI]} game={gameGUID} user={user} />);
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