import './App.css';
import PropsComp from './components/PropsComp';
import CountComp from './components/CountComp';
import CountPropsComp from './components/CountPropsComp';

function App() {
  return (
    <div className="App">
      {/** props을 사용하는 클래스컴포넌트 작성*/}
      <PropsComp color="blue">
        props값을 받아와서 글자색을 바꿉니다
      </PropsComp>
      {/** state을 사용하는 클래스컴포넌트 작성
       * 버튼을 클릭할때마다 10씩 증가하는 컴포넌트
       */}
      <CountComp />
      {/** props, state을 사용하는 클래스컴포넌트 작성
       * props의num값을 가져와서 버튼을 클릭할때마다 num씩증가
      */}
      <CountPropsComp num={20} />
    </div>
  );
}

export default App;
