import React, { Component, Suspense } from 'react'
import HocText from './HocText';
const SecondComponent=React.lazy(()=>import('../components/SecondComponent'))
 class HocComponent extends Component <any,any>{
    constructor(props:any){
        super(props)
        this.state={
            flag:false
        }
    }
     changeHandle=()=>{
        this.setState({
            flag:!this.state.flag
        })
     }
     
  render() {
    
    return (
      <div>
        <p>我的用户名是</p>
        <p> {this.props.userInfo.length?this.props.userInfo:'暂无信息'}</p>
        <button onClick={this.changeHandle}>显示组件</button>
        {this.state.flag&&<Suspense fallback={<div>loading</div>}>
            <SecondComponent/>
            </Suspense>}
      </div>
    )
  }
}
export default HocText(HocComponent)