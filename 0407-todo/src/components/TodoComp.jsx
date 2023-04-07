import { useState } from "react";

// TodoComp에서 전역으로 사용할 변수
let id = 3;

const TodoComp = () => {

    /** TodoComp에서 사용할 데이터
     * inputTodo : input 통해서 가져올 값 - state
     * todoList : todo를 저장할 배열 (추가삭제수정) - state
     *  {id :1 , todo: "첫번째 할일", 
     *   checked: false, date: new Date("2023-04-06")}
     */
    const [todoList , setTodoList] = useState(
        [
            {id: 1, todo:"첫번째 값", checked:false , date:new Date("2023-04-06") },
            {id: 2, todo:"두번째 값", checked:true, date:new Date() }
        ]
    );
    // input의 값을 받아와서 넣을 공간
    const [inputTodo, setInputTodo] = useState("");

    
    // 이벤트 메소드
    const onInputChange = (e)=>{setInputTodo(e.target.value)};
    const addTodo = (e)=>{
        // form의 submit 이벤트는 새로고침을 실행한다
        e.preventDefault();
        // 배열에 새로운 todo추가 - concat()
        // 새로운 배열을 만들어서 setTodoList로 값 할당
        const newTodoList = todoList.concat(
            {
                id : id,
                todo : inputTodo,
                date : new Date(),
                checked : false
            }
        );
        // id값을 1증가시켜서 숫자값을 겹치지 않게 사용
        id++; 
        // state의 값이 바뀌면 업데이트-화면수정
        setTodoList(newTodoList);
        setInputTodo("")
    } 

    // todo삭제
    const deleteTodo = (id)=> {
        // todoList에서 선택한 id를 제외한 배열 ( !== )
        // filter() 함수 이용
        const newTodoList = todoList.filter( (t)=>( t.id !== id ) );
        setTodoList(newTodoList)
    }
    
    // todo checked 수정
    const checkedTodo = (id)=>{
        // map을 이용하여서 요소의 값 수정 - return값 배열로 들어감
        // id값 이용해서 동일한 id 값이라면 수정객체/원래객체
        const newTodoList = todoList.map(
            // map에서 함수작성시 if문 사용가능
            (t)=> t.id === id ? 
            {...t, checked : !t.checked } : 
            t );

        // 값이 제대로 안 들어갔을경우 setTodoList 확인
        setTodoList(newTodoList);
    }





    // 데이터 값을 확인하기 위해 화면의 HTML 구성
    // 데이터 값만 확인 - HTML 뼈대
    // 레이아웃 구성 확인 - css 함께
    return (
        <div>
            <h1>Todo-List</h1>
            { /** submit을 통해서 이벤트 실행 : 마지막 input에서 엔터 눌렀을때 실행 */}
            <form
                onSubmit={addTodo}
            >
                <input type="text" 
                    onChange={ onInputChange }
                    value={inputTodo}
                />
                <input type="submit" value="+" />
            </form>
            <hr />
            <ul>
                {
                    // 배열을 사용할때 map을 사용해서 출력
                    todoList.map( (todo)=>(
                        <li key={todo.id}>
                            <h3>
                                {(todo.date.getMonth()+1)+"월"+todo.date.getDate()+"일"} 
                            </h3>
                            <input 
                                type="checkbox" 
                                checked={todo.checked} readOnly
                                onClick={()=>{ checkedTodo(todo.id)}}
                            />
                            {todo.todo}
                            <button
                                onClick={ ()=>{ deleteTodo(todo.id) }}
                            >
                                X
                            </button>
                        </li>
                    ) )
                }
            </ul>
        </div>
    )
}
export default TodoComp;