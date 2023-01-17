import { useState } from "react"
import CallBackText from "./components/CallBackText"
import ContextHook from "./components/ContextHook"
import DiyTestHook from "./components/DiyTestHook"
import EffectHook from "./components/EffectHook"
import HookBase from "./components/HookBase"
import MemoText from "./components/MemoText"
import MyContext from "./components/MyContext"
import RefText from "./components/RefText"

function App() {
  const [state, setState] = useState(true)
  return (
    <div>
      <HookBase />
      {state && <EffectHook />}
      <button onClick={() => setState(false)}>change</button>
      {/* <DiyTestHook/> */}
      <MyContext.Provider value={{name:'shaolong'}}>
        <ContextHook />

      </MyContext.Provider>
      <RefText/>
      <MemoText/>
      <CallBackText/>
    </div>
  )
}

export default App
