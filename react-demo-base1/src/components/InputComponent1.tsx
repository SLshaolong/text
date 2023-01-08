import { Component, ReactNode, createRef, createContext } from 'react'
import ContentChild from './ContentChild'
import ContentChild3 from './ContentChild3'
import ContentText from './ContentText'
export default class InputComponent extends Component<any, any>{
    input: any
    constructor(props: any) {
        super(props)
        this.state = {
            value: 0,
            data: {
                user: 'shaolong',
                age: 18
            }
        }
        this.input = createRef()
        const MyContent = createContext(this.state.data)
    }

    getValue = () => {
        console.log(this.input.current.value);
        console.log(this.state.value);


    }
    render(): ReactNode {
        return <div>
            <input type="text" value={this.state.value} onChange={(e) => { this.setState({ value: e.target.value }) }} />
            <input type="text" ref={this.input} />
            <button onClick={this.getValue}>获取值</button>
            <ContentText.Provider value={{ user: '少龙', age: 20 }}>
                <ContentChild data={this.state.data} />
                <ContentChild3/>
            </ContentText.Provider>
        </div>
    }
}