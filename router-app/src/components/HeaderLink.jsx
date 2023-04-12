import React from 'react'

import { Link } from 'react-router-dom'

// 링크들을 모아서 헤더에 고정하기
export default function HeaderLink() {
  const fruit = "banana";
  return (
    <div>
        {/** a태그 대신 컴포넌트의 주소로 이동 */}
        <Link to="/about">About</Link>
        {/** to의 속성값으로 자바스크립의 문자열 가능 */}
        <Link to={`/story/${fruit}`}>Story</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/story2">Story2List</Link>
    </div>
  )
}
