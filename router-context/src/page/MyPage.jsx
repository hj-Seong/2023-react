import React from 'react'

import imgFile from '../img/profile.jpg'

import DataContext from '../context/DataContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

export default function MyPage() {
  const { state, action } = useContext(DataContext);


  // 좋아요 삭제 메소드
  // 1. 삭제할 id를 찾는다
  // 2. 삭제할 id를 제외하고 새로운 배열을 만든다 (filter)
  // 3. 새로운 배열을 set~메소드를 이용하여 넣는다
  const deleteLike = (id) => {
    const newLikelist = state.likelist.filter((like)=>(like.boardId !== id));
    action.setLikelist(newLikelist);
  }

  // 프로필 이미지를 바꾸는 메소드 >> 모달창 사용하는 방식
  const changeProfile = () => {
    // 1. 사진을 선택하는 창 출력(파일입력) 
    // 2. 그 사진을 선택하면 프로필 사진이 바뀜
    //    (set메소드를 이용하여 user.profile의 값이 수정)
  }
  

  // input태그안에 있는 file의 값을 가져오는 메소드
  // input태그 안에있는 값을 가져오기 위해 e(이벤트 객체) 사용
  const onLoadFile = (e) => {
    // 이벤트 객체의 파일 배열 중 0번째 인덱스 값 사용
    console.log(e.target.files[0])
    // URL.createObjectURL()을 이용하여 파일의 값을 변형해서 사용
    // 나중에 DB에서도 저장해서 사용 가능

    // user.profile에 넣어서 사용
    action.setUser(
        {
            ...state.user,
            profile : URL.createObjectURL(e.target.files[0])
        }
    )
  } 


  return (
    <div>
        <h3>MyPage</h3>
        <div>
            <img src={ state.user.profile } alt="프로필 사진" width={200}
                style={{borderRadius:"100px"}}
            />
            <button onClick={ changeProfile }>
                프로필 수정
            </button>
            {/** onChange를 이용하여 들고오는 사진이 바뀔때마다 실행
             * 실행하면서 input 그 값을 가져오기위함
             * *input type="text"에서 값을 들고온 것과 유사
             */}
            <input type="file" onChange={ onLoadFile }/>
        </div>
        <h5>{state.user.writer}님의 페이지</h5>
        <hr />
        <h5>좋아요 리스트</h5>
        <ul>
            <li>게시글 제목</li>
            {
                state.likelist.map((like)=>(
                    <li key={like.boardId}>
                        <Link to={`/boardlist/${like.boardId}`}>{like.title}</Link>
                        <button onClick={ ()=>{deleteLike(like.boardId)} }>삭제</button>
                    </li>
                ))
            }
        </ul>

        {/** 모달창을 사용하기 위한 공간*/}
    </div>
  )
}
