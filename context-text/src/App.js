import './App.css';
import Toolbar from './components/Toolbar';

// App에서 쓰기위해, 작성한 ThemeContext 호출
import ThemeContext from './context/ThemeContext';

function App() {
  return (
    <div className="App">
      {/** 작성한 context를 값을 사용할 컴포넌트를 감싸서 사용 */}
      <ThemeContext.Provider value='light'>
        <Toolbar/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
