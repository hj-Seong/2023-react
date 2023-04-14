import React from 'react'
// context의 값을 사용하고자 하는 공간에 
// 작성한 ThemeContext 가져옴
import ThemeContext from '../context/ThemeContext'
import { useContext } from 'react';

export default function Toolbar(props) {
  return (
    <div>
        <ThemedButton theme={props.theme} />
    </div>
  )
}

// 클래스형 컴포넌트로 전달
class ThemedButton extends React.Component {
    // 클래스형 컴포넌트에서 context값을 사용하기위해서
    // contextType에 import해온 ThemeContext를 가져와서
    // 쓸수있다
    static contextType = ThemeContext;
    render() {
                // 호출할때는 this.context를 통해서 호출
        return <MyButton theme={this.context}/>
    }
}

function MyButton (props) {
    // 함수형 컴포넌트에서 ThemeContext를 통해서 값 받아오기
    // useContext를 통해서 값을 받아올수 있다
    // useContext로 받아올 변수의 이름은 자율
    const context =  useContext(ThemeContext);
    return <button>{context}의 버튼입니다</button>
}