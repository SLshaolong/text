import React  from "react";

/**
 * 高阶组件
 */
export default function withUserData(View:any){
    return class extends React.Component<any,any>{
        constructor(props:any){
            super(props)
            this.state={userInfo:{}}
        }
        componentDidMount(){
            const userInfo=localStorage.getItem('userInfo') as string            
            this.setState({
                userInfo
            })
        }
        render(): React.ReactNode {
            return <View userInfo={this.state.userInfo} {...this.props}></View>
        }
    }
}