import {Component, ReactNode} from 'react'
import ContentChild2 from './ContentChild2'

export default class ContentChild extends Component<any,any>{
    render(): ReactNode {
        return <div>
            <ContentChild2 data={this.props.data}/>
        </div>
    }
}