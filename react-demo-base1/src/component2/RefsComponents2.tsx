import React, { createRef } from 'react'
import FnRefsTest from './FnRefsTest'

export default function RefsComponents2() {
    const input: any = createRef()
    const Fnref: any = createRef()
    const GetInput = () => {
       input.current.value='函数式组件ref'
       input.current.style.backgroundColor='rgba(0,0,0,.3)'
        console.log(Fnref);
        
    }
    return (
        <div>

            <input type="text" ref={input} />
            <button onClick={GetInput}>获取输入框</button>
            <FnRefsTest ref={Fnref}/>
        </div>
    )
}
