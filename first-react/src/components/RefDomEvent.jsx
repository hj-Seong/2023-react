import React, { Component } from 'react'

export class RefDomEvent extends Component {
  constructor (props){
    super(props);
    // 1. input태그가 들어갈 공간(변수)
    this.textInput = null;
    // 2. ref 콜백함수를 통해 DOM에 접근
    // 1) ref에 들어갈 함수 작성(화살표함수)
    this.setTextInputRef = (element)=>{
        // 2) element를 통해서 ref를 통해 DOM 가져옴
        // 3) 저장해서 쓰기위해 만든 공간에 할당
        this.textInput = element;
    }

    // 16.3버전 이후 사용 가능
    this.myRef = React.createRef();
  }

  // this.textInput접근하는 메소드
  textInputEvent = ()=>{
    if(this.textInput) {
        // ref를 통해서 DOM을 가져와서 그 안에있는 내용에
        // JS에서 id통해 가져온 것 처럼 접근할 수 있다
        this.textInput.focus();
    }
  }
  // myRef 확인
  myRefEvent = ()=>{
    if(this.myRef.current) {
        this.myRef.current.focus();
    }
  }

  render() {
    return (
      <div>
        <h1>Ref를 통해 input 가져오기</h1>
        <input 
            type="text" 
            // 3. ref 속성을 이용해서 setTextInputRef를 호출
            ref={this.setTextInputRef}
        />
        {/** input태그가 들고와졌는지 확인 */}
        <button onClick={()=>{console.dir(this.textInput)}}>
            console에 textInput출력
        </button>
        <button
            onClick={this.textInputEvent}
        >
            버튼을 누르면 input에 포커스
        </button>

        <input 
          type="text" 
          ref={this.myRef}
        />
        <button
          onClick={()=>{console.log(this.myRef.current)}}
        >
            myRef의 값 확인
        </button>
        <button
          onClick={this.myRefEvent}
        >
            myRef에 포커스
        </button>
      </div>
    )
  }
}

export default RefDomEvent