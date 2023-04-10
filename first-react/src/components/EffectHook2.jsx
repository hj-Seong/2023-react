import React, { useEffect, useState } from 'react'

export default function EffectHook2() {
  // useEffect를 사용해서 useState의 비동기 값을
  // 다른 useState에 담아오는 방법 확인
  const [ name, setName ] = useState("홍길동");
  const [ age, setAge ] = useState(29);
  const [profile, setProfile] = useState({
    name : "홍길동", age : 29
  });

  // name값이 수정되었을 때, 다른 값도 함께 수정
  // 1. setName 먼저 실행
  // 2. useEffect(()=>{},[name])의 함수가 실행
  useEffect(()=>{
    setProfile({...profile, name});
  },[name])

  // age이 바뀌었을때 profile의 age값 수정하는 useEffect
  // *보통은 버튼을 눌렀을때 그 값이 들어감
  // *지금은 연습을 위해 함께 바꾸고 있습니다
  // 출력방식은 name과 동일하게 작성

  return (
    <div>
        <p>useState의 값은 비동기로 저장(실행순서대로 저장되지않음)</p>
        <label htmlFor="">이름</label>
        <input type="text" 
            onChange={(e)=>{
                // name의 값을 바꿔줌
                setName(e.target.value)
                // name안에 들어가 있는 값을 profile에 전달
                // setProfile({...profile, name : name})과 동일
                // 'name' = '값' 즉 '변수'와 '값'이 객체의 '속성'과 '값'으로 들어감
                /* setProfile({...profile, name}); */

                // 같은 이벤트에서 set을 이용하여 수정한state값을 가져올려고하면
                // 이전 값을 가져온다.(현재 바로 수정한값 접근X)
                // > useEffect의 두번째 값[]에 name값을 넣어서 값이 바뀌었을때
                //   setProfile이 실행되게 수정
        }}/>
        <h4>name : {name}, profile의 name :{profile.name} </h4>
    </div>
  )
}
