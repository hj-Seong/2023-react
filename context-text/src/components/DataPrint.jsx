import React from 'react'

// DataPrint 컴포넌트에서
// DataContext를 받아와서 name을 수정할 수 있게 하기
export default function DataPrint() {
  return (
    <div>
        <input type="text" />
        <button>
            이 버튼을 누르면 DataBox에 출력되는 값이 수정
        </button>
    </div>
  )
}
