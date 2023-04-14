import React from 'react'
import data from '../data/dummy.json'

import { useState } from 'react'

// json을 이용한 데이터를 들고와서  
// 목록 출력
export default function BoardList() {
  const [dataList, setDataList] = useState(data);
  return (
    <div>
        <h3>BoardList</h3>
        <ul>
            {
                dataList.map((data)=>(
                    <li>{data.title}</li>
                ))
            }
        </ul>
    </div>
  )
}
