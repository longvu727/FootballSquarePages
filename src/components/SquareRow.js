import { sortByNumber } from "../util/Sorts";
import { Square } from "./Square";

export function SquareRow({row, game, user, setSquareReserve}) {
    function reserveSquare(key, game, user, row_index, column_index) {
      const reserveBodyJson = JSON.stringify({
        game_guid: game,
        user_guid: user,
        row_index: row_index,
        column_index: column_index
      });
      
      console.log("Clicked " + reserveBodyJson);
      
      fetch('http://localhost:3101/ReserveSquares', {method: 'POST', body: reserveBodyJson})
        .then((response)=>response.json());
    }

    let squares = [];
    const keys = Object.keys(row).sort(sortByNumber);

    for (let columnI of keys) {
        let square = row[columnI];
        let key = square.row_index + "_" + square.column_index;
        squares.push(
          <Square key={key} square={square}
              onSquareClick={() => reserveSquare(key, game, user, square.row_index, square.column_index)} />
        );
    }

    return <>
        <div key={keys.join("_")} className="board-row">
            {squares}
        </div>
    </>;
}
