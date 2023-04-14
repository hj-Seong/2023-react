import './App.css';
import Toolbar from './components/Toolbar';

// App에서 쓰기위해, 작성한 ThemeContext 호출
import ThemeContext from './context/ThemeContext';
import ObjectContext from './context/ObjectContext';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <div className="App">
      {/** 작성한 context를 값을 사용할 컴포넌트를 감싸서 사용 */}
      <ThemeContext.Provider value='light'>
        <ObjectContext.Provider value={ {name:"홍길동", login:true} }>
          {/** ThemeContext와 ObjectContext값 확인  */}
          <Toolbar/>
        </ObjectContext.Provider>
      </ThemeContext.Provider>

      <DataProvider>
        { /** DataProvider 값 확인 */}
        <Toolbar/>
      </DataProvider>

    </div>
  );
}

export default App;
