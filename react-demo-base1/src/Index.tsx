import ErrorBonday from "./component2/ErrorBonday";
import Fragments from "./component2/Fragments";
import RefsComponents from "./component2/RefsComponents";
import RefsComponents2 from "./component2/RefsComponents2";
import SomeThingWrong from "./component2/SomeThingWrong";
import React, { Suspense } from "react";
import TimeSplice from "./Performance/TimeSplice";
import Virtual from "./Performance/Virtual";
const HocComponent=React.lazy(()=>import('./Hoc/HocComponent'))
export default function Index ()
{
    
    return <div>
        <h3>另一个组件</h3>
        <Fragments/>
        <ErrorBonday>
            {/* <SomeThingWrong/> */}
        </ErrorBonday>
        <RefsComponents/>
        <RefsComponents2/>
        
       <Suspense fallback={<div>loading</div>}>
       <HocComponent/>
       </Suspense>
       {/* <TimeSplice/> 时间分割 */}
       <Virtual/>
    </div>
}