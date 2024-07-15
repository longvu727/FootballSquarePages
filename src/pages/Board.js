import { useEffect, useState } from "react";
import { SquareRow } from "../components/SquareRow";
import { Square } from "../components/Square";
import { sortByNumber } from "../util/Sorts";
import "../css/board.css"

export default  function Board({data, user}) {

  if(!data){
    return;
  }

  const rows = [];
  const squaresRowsColumns = toSquareRowsColumns(data.football_squares);
  const gameGUID = data.game_guid;

  for (let rowI of Object.keys(squaresRowsColumns).sort(sortByNumber)) {
    rows.push(<SquareRow key={rowI} row={squaresRowsColumns[rowI]} game={gameGUID} user={user} />);
  }
  
  return <>
    <div className="boardContainer">
      <div className="teamA"> {data && data.team_a} </div>
      <div className="squares"> {rows.length > 0 && rows} </div>
      <div className="teamB"> {data && data.team_b} </div>
    </div>
  </>;
  
}

function BoardBK2() {
    const data = JSON.parse(`{
      "game_guid": "e48958c4-4835-4b2c-aa73-12fe2f3a3c0e",
      "sport": "football",
      "team_a": "Team Red",
      "team_b": "Team Blue",
      "square_size": 10,
      "row_points": "",
      "column_points": "",
      "football_squares": [
          {
              "column_index": 1,
              "row_index": 1,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "CHI",
              "user_name": ""
          },
          {
              "column_index": 2,
              "row_index": 1,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 3,
              "row_index": 1,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 4,
              "row_index": 1,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 5,
              "row_index": 1,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 6,
              "row_index": 1,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 7,
              "row_index": 1,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 8,
              "row_index": 1,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 9,
              "row_index": 1,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 10,
              "row_index": 1,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "ANH",
              "user_name": ""
          },
          {
              "column_index": 1,
              "row_index": 2,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "LVU",
              "user_name": ""
          },
          {
              "column_index": 2,
              "row_index": 2,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 3,
              "row_index": 2,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 4,
              "row_index": 2,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 5,
              "row_index": 2,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 6,
              "row_index": 2,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 7,
              "row_index": 2,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 8,
              "row_index": 2,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 9,
              "row_index": 2,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 10,
              "row_index": 2,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 1,
              "row_index": 3,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 2,
              "row_index": 3,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 3,
              "row_index": 3,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 4,
              "row_index": 3,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 5,
              "row_index": 3,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 6,
              "row_index": 3,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 7,
              "row_index": 3,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 8,
              "row_index": 3,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 9,
              "row_index": 3,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 10,
              "row_index": 3,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 1,
              "row_index": 4,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 2,
              "row_index": 4,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 3,
              "row_index": 4,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 4,
              "row_index": 4,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 5,
              "row_index": 4,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 6,
              "row_index": 4,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 7,
              "row_index": 4,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 8,
              "row_index": 4,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 9,
              "row_index": 4,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 10,
              "row_index": 4,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 1,
              "row_index": 5,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 2,
              "row_index": 5,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 3,
              "row_index": 5,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 4,
              "row_index": 5,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 5,
              "row_index": 5,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 6,
              "row_index": 5,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 7,
              "row_index": 5,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 8,
              "row_index": 5,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 9,
              "row_index": 5,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 10,
              "row_index": 5,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 1,
              "row_index": 6,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 2,
              "row_index": 6,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 3,
              "row_index": 6,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 4,
              "row_index": 6,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 5,
              "row_index": 6,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 6,
              "row_index": 6,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 7,
              "row_index": 6,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 8,
              "row_index": 6,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 9,
              "row_index": 6,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 10,
              "row_index": 6,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 1,
              "row_index": 7,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 2,
              "row_index": 7,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 3,
              "row_index": 7,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 4,
              "row_index": 7,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 5,
              "row_index": 7,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 6,
              "row_index": 7,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 7,
              "row_index": 7,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 8,
              "row_index": 7,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 9,
              "row_index": 7,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 10,
              "row_index": 7,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 1,
              "row_index": 8,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 2,
              "row_index": 8,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 3,
              "row_index": 8,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 4,
              "row_index": 8,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 5,
              "row_index": 8,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 6,
              "row_index": 8,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 7,
              "row_index": 8,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 8,
              "row_index": 8,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 9,
              "row_index": 8,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 10,
              "row_index": 8,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 1,
              "row_index": 9,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 2,
              "row_index": 9,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 3,
              "row_index": 9,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 4,
              "row_index": 9,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 5,
              "row_index": 9,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 6,
              "row_index": 9,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 7,
              "row_index": 9,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 8,
              "row_index": 9,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 9,
              "row_index": 9,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 10,
              "row_index": 9,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 1,
              "row_index": 10,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 2,
              "row_index": 10,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 3,
              "row_index": 10,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 4,
              "row_index": 10,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 5,
              "row_index": 10,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 6,
              "row_index": 10,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 7,
              "row_index": 10,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 8,
              "row_index": 10,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 9,
              "row_index": 10,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          },
          {
              "column_index": 10,
              "row_index": 10,
              "winner_quater_number": 0,
              "winner": false,
              "user_guid": "",
              "user_alias": "",
              "user_name": ""
          }
      ],
      "error_message": ""
  }`);
  
    const squaresRowsColumns = toSquareRowsColumns(data.football_squares);
    const rows = [];
  
    for (let rowI of Object.keys(squaresRowsColumns).sort(sortByNumber)) {
      rows.push(<SquareRow key={rowI} row={squaresRowsColumns[rowI]} />)
    }
  
    return (<>
      <div className="teamA"> {data.team_a} </div>
      <div className="squares"> {rows} </div>
      <div className="teamB"> {data.team_b} </div>
    </>);
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

function BoardBK() {
  const [squares, setSquares] =  useState([]);

  useEffect( ()=> {
    const dataFetch = async () => {
      const data = await (
        await fetch( 'http://localhost:3101/GetGame/d3ada7f0-d02b-499e-b906-136fc0044087' )
      ).json();

      // set state when the data received
      setSquares(data.football_squares);
    };

    dataFetch();
  }, []);

  function handleClick(i){
    console.log("Clicked " + i);
  }

  console.log(squares);
  
  const rows = [];

  for (let i=0; i < squares.length ; i++) {
    let square = squares[i]
    rows.push(
        <Square 
          key={square.row_index + "_" + square.column_index}
          square={square}
          onSquareClick={() => handleClick(2)}
        />
    );
  }

  return (
    <>
      {rows}
    </>
  );
}