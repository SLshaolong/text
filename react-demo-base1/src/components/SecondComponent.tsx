
import { Component, ReactNode } from 'react'
interface stats {
    count:number
}
export default class SecondComponent extends Component<stats,stats>{
    

    constructor(props: any) {
        super(props)        
        this.state = {
            count: 0
        }
    }
    AddCount = () => {
       this.setState({
        count:this.state.count+1
       })

    }
    render(): ReactNode {        
        return (
            <div>
                <h1 style={{ fontSize: '20px', color: '#aa0aba' }}>声明类式组件</h1>
                <p> {this.state.count}</p>
                <button onClick={this.AddCount}>addCount</button>
            </div>
        )
    }

}