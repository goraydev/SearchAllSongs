import React from 'react'
import { useParams } from 'react-router-dom'

export const Song = () => {
    const {id} = useParams();

    
  return (
    <div>Song</div>
  )
}
