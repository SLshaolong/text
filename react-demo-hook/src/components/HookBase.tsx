import {useState} from 'react'

export default function HookBase(){
    const [count,setCount]=useState(0)
    const addNumber=()=>{
        setCount(count+1)
    }
    return<div>
        <h3>Hook默认使用</h3>
        <button onClick={addNumber}>Add Number</button>
        <p>{count}</p>
    </div>
}