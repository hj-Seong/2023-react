// 16.8버전 이후로 함수형에서 state 사용 가능
import { useState } from "react";

// 화면의 업데이트에 상관없이 사용하는 변수
// 현재 컴포넌트에서 전역변수로 쓸 변수
let globalId = 4;


// 함수형 컴포넌트의 특징
// 1) this를 사용하지 않는다
// 2) 안에 값을 넣어줄때 변수로 할당하므로 const나 let 사용
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
    // 학생 이름을 받아올 공간
    const [inputName, setInputName] = useState("");
    
    
    // 클래스형에서 render()안에 값이 계속 초기화
    // 함수형 클래스에서는 함수 안에 있는 내용이 계속 초기화
    let id = 4;


    // 메소드 작성 
    const inputChange = (e)=>{setInputName(e.target.value)};

    const addStudent = () => {
        // 값을 받아와서 새로운 배열로 만들기
        // 새로운 배열 students 할당
        const newStudents = students.concat(
            {
                id : globalId,
                name : inputName
            }
        );
        globalId++;
        setStudents(newStudents);
        setInputName("");
    }

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
            <h3>학생추가</h3>
            <input 
                type="text"
                onChange={inputChange}
                value={inputName}
            /> 
            <button
                onClick={addStudent}
            >
                추가
            </button>
            <ul>
                {
                    students.map((student)=>
                        <li key={student.id}>
                            {student.id} , {student.name}
                        </li>
                    )
                }
            </ul>

        </div>
    )
}
export default ArrowState;