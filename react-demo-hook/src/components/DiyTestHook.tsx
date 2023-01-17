import React from 'react'
import useDiyHook from './useDiyHook'
interface Ioptions {
    children?: React.ReactNode
}
export default function DiyTestHook(props: Ioptions) {
    const [userInfo, setUserInfo] = useDiyHook()
    return (
        <div>
            <h3>我是自定义的Hook组件</h3>
            {/* <p> {userInfo}</p> */}
            
        </div>
    )
}
