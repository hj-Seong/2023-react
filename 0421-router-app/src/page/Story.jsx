import React from 'react'
import { useParams } from 'react-router-dom'

export default function Story() {
  const { name } = useParams();
  return (
    <div>
      <h3>{name}-story</h3>
      
    </div>
  )
}
