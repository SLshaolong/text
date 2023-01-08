import React, { Component } from 'react'
import ContentText from './ContentText'

export default class ContentChild2 extends Component<any,any> {

    static contextType=ContentText
    declare context: React.ContextType<typeof ContentText>
  render() {
    return (
      <div>
        <p>二级传递</p>
        {this.props.data.user}
        {this.context.age}
      </div>
      
    )
  }
}
ContentChild2.contextType=ContentText