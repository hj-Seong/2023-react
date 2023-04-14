import './App.css';
import {Route, Routes} from "react-router-dom"
import Home from './page/Home';
import BoardList from './page/BoardList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/boardlist' element={<BoardList/>}/>
      </Routes>
    </div>
  );
}

export default App;
