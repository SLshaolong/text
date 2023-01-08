import FirstComponent from "./components/FirstComponet";
import SecondComponent from "./components/SecondComponent";
import StateComponent from "./components/StateComponent";
import { useState } from "react";
function App() {
  let [count, setCount] = useState('')
  const name = 'shaolong'
  const id: number | string = '0';
  const className = 'admin'
  const flag: boolean = true
  const big = {
    fontSize: '30px',
    color: '#ff0000'
  }
  const data: any = [
    'shaolong',
    12,
    'heelo',
    <h1>在哪</h1>
  ]
  const objectData = [
    { name: 'shaolong', age: '20' },
    { name: '小刘', age: '20' },
    { name: '小王', age: '20' },
    { name: '你好啊', age: '20' },
  ]
  const clickHandle = (str: string, e: any): void => {
    console.log('点击事件被触发');
    console.log(e);
    console.log(str);


  }
  const printHandle = (e: string) => {
    console.log(e);

  }
  const onchange = (e: string) => {
    console.log(e);
    setCount(e)
  }
  return (
    <div>
      the first demo of react name is {name}
      <p id={id} className={className} style={big}>你好</p>
      {flag ? '真' : '假'}
      {flag && <div>你好</div>}

      <ul>
        {data.map((item: string, index: number) => {
          return <li key={index}>{item}</li>
        })}
      </ul>

      <ul>
        {objectData.map((item, index) => {
          return <li key={index} onClick={() => printHandle(item.name)}>{item.name}:{item.age}</li>
        })}
      </ul>
      <button onClick={(e) => clickHandle('hello', e)}>点击我</button>
      <FirstComponent name="少龙" cb={onchange} >
          <h2>我是父组件传递的children</h2>
      </FirstComponent>
      <SecondComponent count={0} />
      <p>子组件传递的内容{count}</p>
      <br />
      <br />
      <hr />
      <StateComponent/>
    </div>

  )
}

export default App

