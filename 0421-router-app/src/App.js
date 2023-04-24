import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import NavHeader from './components/NavHeader';
import StoryList from './page/StoryList';

function App() {
  return (
    <div className="App">
      <NavHeader />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/storylist' element={<StoryList />}/>
      </Routes>
    </div>
  );
}

export default App;
