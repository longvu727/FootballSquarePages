import { Route, Routes } from 'react-router-dom';
import Board from './pages/Board';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/board/:game_guid/:user_guid" element={<Board/>}></Route>
        <Route path="/board" element={<Board/>}></Route>
    </Routes>
  );
}

export default App;