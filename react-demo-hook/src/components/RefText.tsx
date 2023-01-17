import React, { useRef } from 'react'

export default function RefText() {
    const inputVal=useRef(null)
    const getRef=()=>{
        const val:any=inputVal.current as unknown as string
        console.log(val.value);
                
    }
  return (
    <div>
        <h3>useRef</h3>
      <input type="text" ref={inputVal}/>
      <button onClick={getRef}>getRef</button>
    </div>
  )
}
