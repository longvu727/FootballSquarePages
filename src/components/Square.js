
export function Square({ square, onSquareClick }) {
    return <button className="square" onClick={onSquareClick}>
        {"" + square.user_alias}
    </button>;
}
