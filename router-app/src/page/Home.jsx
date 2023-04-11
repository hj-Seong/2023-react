import React from 'react'

// Link를 통해서 react-router-dom에서 지정한 주소로 이동
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <h1>Home</h1>
        <p>현재 화면은 홈입니다.</p>
        {/** a태그 대신 컴포넌트의 주소로 이동 */}
        <Link to="/about">About</Link>
        {/** to의 속성값으로 자바스크립의 문자열 가능 */}
        <Link to={"/story"}>Story</Link>
    </div>
  )
}
