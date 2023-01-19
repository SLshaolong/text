import { AnyAction } from '@reduxjs/toolkit'
import React, { useRef } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {changeUserName} from '../../slice/index'
export default function User() {
const userRef:any=useRef()
const dispath=useDispatch()
const name=useSelector((state:any)=>state.user.name)
    const changeUserNames=()=>{
        const user=userRef.current.value
        dispath(changeUserName({user  }))

        
    }
  return (
    <div>
      <h3>用户页面</h3>
      用户名{name}
      <p>修改用户名 <input type="text" ref={userRef} /></p>
      <button onClick={changeUserNames}>修改用户名</button>
    </div>
  )
}
