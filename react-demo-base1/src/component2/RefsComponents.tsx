import React, { Component ,createRef} from 'react'

export default class RefsComponents extends Component {
    input: any;
    constructor(props:any){
        super(props)
        this.input=createRef();
    }
    GetInput=()=>{
        const input=this.input.current
        input.value='hello'
        input.style.color='#ff0000'

        
    }
  render() {
    return (
      <div>
            <input type="text" ref={this.input} />
            <button onClick={this.GetInput}>getInput</button>
      </div>
    )
  }
}
