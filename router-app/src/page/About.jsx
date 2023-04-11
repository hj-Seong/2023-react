import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
        <h1>About</h1>
        <p>About 페이지입니다</p>
        {/** home과 story로 이동하는 Link 작성 
         * to의 작성된 내용이 App.js에서 작성 path이름과 동일
        */}
        <Link to='/'>Home</Link>
        <Link to='/story'>Story</Link>
    </div>
  )
}
