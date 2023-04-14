import React from 'react'

export default function ContextBox() {
  return (
    <div>
        <ContextText></ContextText>
    </div>
  )
}

function ContextText () {
    // useContext() ThemeContext 를 가져와서 출력하기
    return <p>{}</p>
}