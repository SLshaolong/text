import React from "react";
export default class SomeThingWrong extends React.Component{
    constructor(props:any){
        super(props)
    } 
    componentDidCatch(){
        console.log('发生错误');
        
    }   
    
    render(): React.ReactNode {
        return <div>
            <p>我是错误信息</p>
        </div>
    }
}
