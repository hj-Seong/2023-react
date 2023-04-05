// 16.8버전 이후로 함수형에서 state 사용 가능
import { useState } from "react";

const ArrowState = (props) => {
    // useState는 항상 함수(컴포넌트)안에 작성
    const [message, setMessage] = useState(
        {
            time:"10:53",
            text: "메세지 입니다"
        });
    // useState는 여러번 사용할수 있다
    const [number, setNumber] = useState(0);
    const [array, setArray] = useState([1,2,3,4]);

    // map을 이용하여 id값과 name을 화면에 출력
    const [students, setStudents] = useState(
        [
            {id: 1, name:"홍길동"},
            {id: 2, name:"성춘향"},
            {id: 3, name:"흥부"},
        ]
    );

    return (
        <div>
            <p>{number} ,{message.text}</p>
            <button
                // useState로 작성한 함수를 통해서 값을 넣어줄때
                // 그 값의 자료형이 같지 않아도 넣어준다
                // 작성할 때 그 값의 자료형을 확인하고 동일한 형태로 할당
                // 객체/배열의 일부분만 수정해서 넣을때 사용하는 연산자
                // ...(스프레드 연산자 사용)
                // : 객체나 배열안에있는 값(요소)을 꺼내서 사용
                // 객체에서 동일한 속성이름을 사용하면 마지막에 적은 값 사용
                onClick={()=>{setMessage({...message, text:"수정된 내용" })}}
            >
                글자값 수정
            </button>
            {
                array.map((num,i)=><li key={i}>{num}</li>)
            }
        </div>
    )
}
export default ArrowState;