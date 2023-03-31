import React, { Component } from 'react'

export class EventComp extends Component {
  render() {
    // render안에서 this = EventComp;
    // this.state는 construct의 속성값
    // const {} = this.state;

    return (
        // 이벤트를 위한 버튼 작성
      <div>
        <h3>버튼을 클릭했을때 console.log("이벤트 실행")</h3>
        <button
            // 실행할 함수 내용이 짧을때
            // (화살표함수를 이용하여 바로작성)
            // 이벤트 객체 사용가능
            // this를 사용했을때 자기자신클래스 컴포넌트 호출
            // > 클래스컴포넌트에서 사용하는 props과state호출
            onClick={(e)=>{console.log(e, this)}}
        >
            화살표함수를 사용해서 이벤트 실행
        </button>
        <button
            // 익명함수를 사용해서 
            // 이벤트 객체 사용가능 
            // this를 사용하면 연결된 객체가 없으므로 undefined 출력
            // hmtl파일에서 js 익명함수를 들고오면 window객체로 들고오지만
            // react에서 익명함수를 들고오면 this의 값이 undefined이다
            // react에서 익명함수를 사용하려면 함수의 this값을 연결
            // this값을 연결하기 위해 .bind(this)
            // return 안에서.bind(this) 불러오는 this = EventComp
            onClick={ function(e){console.log(e, this)}.bind(this) }
        >
            익명함수를 사용해서 이벤트 실행
        </button>
      </div>
    )
  }
}

export default EventComp