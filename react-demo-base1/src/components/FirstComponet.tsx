interface props{
    name:string,
    cb:Function,
    children:any
}

function FirstComponent(props:props){
    
    
    const addFather=()=>{
        props.cb('aaa')
    }
    return(
        <div>
            <h1 style={{fontSize:'30px',color:'#ff00a0'}}>函数式组件</h1>
            <p>姓名{props.name}</p>
            <button onClick={addFather}>点击我向父亲传递信息</button>
            {props.children}
        </div>
    )
}
export default FirstComponent