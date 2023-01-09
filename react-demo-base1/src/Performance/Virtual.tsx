import React, { Component } from 'react'
import{List,AutoSizer} from 'react-virtualized'

/**
 * 虚拟列表
 */
export default class Virtual extends Component<any,any> {
    constructor(props:any){
        super(props)
        this.state={
            list:[]
        }
    }

  render() {
    return (
      <div style={{height:'600px',border:'1px solid #aaa'}}>
        {/* <AutoSizer>
        {({width,height})=>{
         return  <List 
          width={width} 
          height={height}
         rowCount={this.state.list.length}
         rowHeight={50}
         rowRenderer={({key,index,style})=><li key={key} style={style}>
         这是第{index+1}条数据
   
       </li>}
         />
        }}
     </AutoSizer>     */}
      </div>
    )
  }
}
