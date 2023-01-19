
import axios from 'axios';
import {useState} from 'react';
function App() {
const [list,changeList]=useState([])
const FetchBth=()=>{
  fetch('https://api.51ds8.cn/getcvid').then(res=>res.json()).then(data=>{
    console.log(data);
    
  })
}
const axiosBtn=()=>{
  axios.get('https://api.51ds8.cn/list').then(res=>res.data).then(data=>{
    if(data.status==200){
      changeList(data.msg)
      
    }
  })
}
  return (
    <div>
      <button onClick={FetchBth}>点击发送网络请求</button>
      <button onClick={axiosBtn}>点击发送网络请求</button>
      {list.length>0&& <ul>
        {list.map((item:any,index)=>{
          return <li key={index}>{item.title}--- {item.desc}</li>
        })}
      </ul> }
    </div>
  )
}

export default App
