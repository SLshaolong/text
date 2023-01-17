import { useContext, useEffect } from "react";
import MyContext from "./MyContext";
type Icontext={
    name?:string
}
export default function ContextHook(){
    const context:Icontext=useContext(MyContext)
    return(
        <div>
            <p>UseCount</p>
            <p>传递的数据是：{context.name}</p>
        </div>
    )
}