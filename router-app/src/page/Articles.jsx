import React from 'react'
import { Link } from 'react-router-dom';

// 게시글 목록을 보여주는 페이지 컴포넌트
export default function Articles() {
  // 배열을 사용해서 목록작성
  const list = [1,2,3,4,5];
  return (
    <div>
        <h3>Article 목록</h3>
        {
            list.map((id)=>(
                <Link to={`/articles/${id}`}> 게시글{id} |</Link>
            ))
        }
    </div>
  )
}
