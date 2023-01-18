import React, { useEffect, useState } from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

export default function User() {
  const [search, setSerach] = useSearchParams()
  const [arr, changeArr] = useState([])
  useEffect(() => {    
    changeArr(JSON.parse(search.get('arr') as string))

  }, [search])

  return (
    <div>
      <h3>我是用户界面</h3>
      <p>search传递参数 id={search.get('id')}</p>
      <ul>
        {arr&& arr.map((item,index)=>{
          return <li key={index}>{item}</li>
        })}
      </ul>
      <Outlet />
    </div>
  )
}
