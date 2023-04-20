import React from 'react'
import data from '../data/dummy.json'

import { useState, useContext } from 'react'
import DataContext from '../context/DataContext';
import { Link } from 'react-router-dom';

// json을 이용한 데이터를 들고와서  
// 목록 출력
export default function BoardList() {
  //const [dataList, setDataList] = useState(data);
  
  // DataContext에서 값을 가져와서 사용하기
  // {state :{boardlist}, action:{serBoardlist}}
  const value = useContext(DataContext);


  // 좋아요 버튼 메소드
  // 1. 클릭했을때, 값 추가 : 객체 생성 후 (concat)
  // 2. 클릭했을때, 값 제거 
  // > 값이 없을 때 : 추가, 값이 있을 때 : 제거
  // find()를 사용해서 값이 있을때 객체(T), 값이 없을때는 undefined(F) return
  const likeClick = ( board ) => {

    // 값이 있으면 삭제
    if( value.state.likelist.find((like)=>(like.boardId === board.id))  ) {

        // filer를 통해서 삭제 id가 같다면 제외하고 배열생성
        const newLikelist = value.state.likelist.filter(
            (like)=>(like.boardId !== board.id))
        value.action.setLikelist(newLikelist)
    } else {
        // 값이 없으면 추가
        // 클릭했을때 값 추가 >> 매개변수로 받아오기
        const newlike = {
            boardId : board.id,
            title : board.title,
        }
        const newLikelist = value.state.likelist.concat(newlike);
        value.action.setLikelist(newLikelist);
    }


  }

  return (
    <div>
        <h3>BoardList</h3>
        <ul>
            {
                // 좋아요 기능을 사용하기위해서
                // 좋아요 배열에 있는 boardId와 
                // boardlist에 있는 id와 비교하여서 그 값이 있다면
                // 화면에 출력

                // 어떤 배열 메소드를 사용해서 비교할지 결정 : find()
                // map()으로 board값이 하나씩 반복되고 있고
                // 하나씩 가져오는 board 값과 좋아요 배열을 비교
                value.state.boardlist.map((data)=>(
                    <li key={data.id}>
                        {/** find를 이용해서 data(board)와 likelist 비교해서
                         * 값이 있다면 색있는 하트를 (객체 return)
                         * 값이 없다면 색없는 하트를 (undefined)
                         * : 삼항연산자
                         */}
                        <span onClick={ ()=>{likeClick(data)} }>
                        {
                            value.state.likelist.find((like)=>(like.boardId === data.id))
                            ? <span>🧡</span>: <span>🤍</span>
                        }
                        </span>
                        <Link to={`/boardlist/${data.id}`}>
                            {data.title}
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
