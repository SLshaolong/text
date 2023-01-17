import { ReactNode, useEffect, useState } from 'react'
export default function useDiyHook() {
    const [userInfo, setUserInfo] = useState('')

    useEffect(() => {
        const info = localStorage.getItem('userInfo') as string
        setUserInfo(info)
    }, [])

    return [userInfo
        ,setUserInfo]
}