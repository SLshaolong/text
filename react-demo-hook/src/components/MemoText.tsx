import React, { useMemo, useState } from 'react'

export default function MemoText() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [color, setColor] = useState({});
    const num = useMemo(() => {
        return num1 + num2
    }, [num1, num2])
    return (
        <div>
            <p>Memo缓存</p>
            <button onClick={() => setNum1(num1 + 1)}>num1+</button>
            <button onClick={() => setNum2(num2 + 1)}>num2+</button>
            <p>num1+num2={num}</p>
            <button style={color} onClick={()=>setColor({color:'red'})}>setColor</button>
        </div>
    )
}
