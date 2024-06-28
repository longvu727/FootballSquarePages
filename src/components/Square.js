
export function Square({ square, onSquareClick }) {
    return <button className="square" onClick={onSquareClick}>
        {"" + square.row_index + square.column_index}
    </button>;
}
