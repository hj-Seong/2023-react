import './App.css';
// 라우터를 가져오기위해 router-dom에서 컴포넌트 가져옴
import { Routes, Route } from 'react-router-dom';

// 각각의 페이지(하나에 주소에 보일 컴포넌트)
import Home from './page/Home';
import About from './page/About';
import Story from './page/Story';

function App() {
  return (
    // Routes를 이용하여 컴포넌트와 주소를 연결하는 Route를 정리
    // div안에 Routes를 넣어서 사용해도 상관없다
    <Routes>
      {/* app.js 안에서 Route 이용해서 주소와 컴포넌트 연결
        * path : 주소 '/' : 첫 화면에 보이는 주소
        * element : 컴포넌트 { <Home/> }를 통해서 전달 
       */}
      <Route path='/' element={<Home />} />
      <Route path='/about' element={ <About /> } />
      {/** <Story /> 페이지 컴포넌트를 만들어서, '/story' 주소로 연결 
       * 확인은 주소창에 http://localhost:3000/story 로 확인
       * 위에 작성했던 것과 동일
      */}
      <Route path='/story' element={ <Story /> } />

    </Routes>
  );
}

export default App;
