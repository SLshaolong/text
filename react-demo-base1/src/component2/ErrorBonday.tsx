import React, { Component } from 'react'

export default class ErrorBonday extends Component <any,any>{
    constructor(props:any){
        super(props)
        this.state={
            flag:false
        }
    }
    componentDidCatch(err:any,errInfo:any){
        console.log(err);
        
        this.setState({err:err,errInfo:errInfo})
    }
  render() {
    return (
      <div>
        {this.state.error?<div>糟糕发生了一些错误
            <br />
            {this.state.error&& this.state.error.toString()}
        </div>:this.props.children}
      </div>
    )
  }
}
