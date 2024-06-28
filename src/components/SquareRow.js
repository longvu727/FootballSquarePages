import { sortByNumber } from "../util/Sorts";
import { Square } from "./Square";

export function SquareRow({ row }) {
    function handleClick(i) {
        console.log("Clicked " + i);
    }

    let squares = [];
    const keys = Object.keys(row).sort(sortByNumber);

    for (let columnI of keys) {
        let square = row[columnI];
        let key = square.row_index + "_" + square.column_index;
        squares.push(
            <Square
                key={key}
                square={square}
                onSquareClick={() => handleClick(key)} />
        );
    }

    return <div key={keys.join("_")} className="board-row">
        {squares}
    </div>;
}
