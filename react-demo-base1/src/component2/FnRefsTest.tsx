import React from 'react'

export default React.forwardRef<any>((props,refs)=>
<h1 ref={refs}>你好</h1>
)