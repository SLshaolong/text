import {Component, ReactNode} from 'react'

export default class StateComponent extends Component<any,any>{

    constructor(props:any){
        super(props)
        this.state={
            count:0
        }
        console.log('构造器');
        
    }
    static getDerivedStateFromProps(){
        console.log('挂载的函数');
        return true
    }
    componentDidMount(){
        console.log('渲染完成');
        
    }
    AddFunction():any{
        this.setState({
            count:this.state.count+1
        })
    }
    render(): ReactNode {
        console.log('渲染函数');
        
        return(
            <div>
                <h3 style={{fontSize:'20px',color:'#000'}}></h3>
                <p>自身状态 State {this.state.count}</p>
                <button onClick={this.AddFunction.bind(this)} >add</button>
            </div>
        )
    }
}