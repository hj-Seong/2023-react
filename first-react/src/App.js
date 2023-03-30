import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
// 동일한 파일에서 두개이상 내보냈을때, 그 각각의 값을
// 각각 가져와야 쓸수 있다
import LoginComp from './components/LoginComp';
import { LoginText } from './components/LoginComp';

function App() {
  return (
    <div className="App">
      <h1>리액트 프로젝트를 수정해서 사용합니다</h1>
      <MyComponent />
      {/* 만든 컴포넌트에 속성=값을 통해 값을 props전달 */}
      <LoginComp login={true} name="홍길동" />
    </div>
  );
}

// import를 이용하여 다른 파일에서 값을 가져올때
// export를 이용해서 내보내는 값
export default App;
