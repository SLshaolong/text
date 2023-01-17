import React,{useEffect,useRef,useState} from 'react'

export default function EffectHook() {
    const [data,changeData]=useState(new Date().toLocaleTimeString())
    const input=useRef<any>()
    useEffect(()=>{
       input.current.value='changed value'
        const timer=setInterval(()=>{
            changeData(new Date().toLocaleTimeString())
            console.log(new Date().toLocaleTimeString());
            
        },1000)
        return ()=>{
            clearInterval(timer)
            console.log('卸载');
            
        }
    },[])
  return (
    <div>
      <input type="text" ref={input} />
        <p>现在时间是 {data}</p>
    </div>
  )
}
