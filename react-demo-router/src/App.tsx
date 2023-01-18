import { useEffect, useState } from 'react'
import { BrowserRouter, HashRouter, Routes, Route, Link, Navigate, createSearchParams, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import User from './components/User'
import Child from './components/Child'
import Child2 from './components/Child2'


function App() {
  const [flag, setFlag] = useState(false)
  // const navigate = useNavigate()

  const changeBtnFlag = () => {
    setFlag(!flag)

  }
  
  const params=createSearchParams({
    id:'10',
    arr:'[123,123]'
  })
  return (
    <div>
      
      <BrowserRouter basename='/app'>
      <h3>Router使用</h3>
      <button onClick={changeBtnFlag}>修改</button>

      <button>跳转并传参</button>
        {flag && <Navigate to='/user/child' />}
        <ul>
          <li>
            <Link to={{ pathname: '/' }}>首页</Link>

          </li>
          <li>
            <Link to={{pathname:'/user',search:`id=${10}`}}>用户</Link> <br />
            <Link to={{pathname:'/user',search:`${params}`}}>用户传递参数</Link> <br />
            <Link to='/user/homes' state={{name:'shaolong',age:20}}>用户state传递参数</Link>
          </li>
        </ul>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/user' element={<User />}  >

            <Route path='home/:id' index element={<Child />} />
            <Route path='homes' index element={<Child />} />
            <Route path='child' index element={<Child2 />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <HashRouter basename='/hash'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user' element={<User />} />
        </Routes>
      </HashRouter> */}
    </div>
  )
}

export default App
