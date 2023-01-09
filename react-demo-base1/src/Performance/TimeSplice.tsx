import React, { Component } from 'react'
/**
 * 时间切片
 */
export default class TimeSplice extends Component <any,any>{
    perlist: Array<number>[]
    constructor(props:any){
        super(props)
        this.state={list:[]}
        this.perlist=[]
    }
    componentDidMount(){
        this.perlist=new Array(40000).fill(0)
        this.TimeSplice(0)
    }
    TimeSplice=(time:number)=>{
        if(time==400){
            return
        }
        setTimeout(()=>{
            const sliceList=this.perlist.slice(time*100,(time+1)*100)
            this.setState({list:this.state.list.concat(sliceList)})
            this.TimeSplice(time+1)
        },1000)
    }
  render() {
    return (
      <div>
        <ul>
            {this.state.list.map((item:number,index:number)=> <li key={index}>这是第{index+1}条数据</li> )}
        </ul>
      </div>
    )
  }
}
