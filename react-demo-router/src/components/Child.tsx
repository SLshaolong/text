import React from 'react'
import { useParams,useLocation, useNavigate } from 'react-router-dom';

export default function Child() {
  const navigate=useNavigate()
  const params=useLocation()
  const ClickHandle1=()=>{
    navigate('/user/child')
  }
  return (
    <div>Child
      <p>{useParams().id}</p>
      <p>{params.state.name&&params.state.name}</p>
      <p>{params.state.age&&params.state.age}</p>
      <button onClick={ClickHandle1}>跳转</button>
    </div>
  )
}
