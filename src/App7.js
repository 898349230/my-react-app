import { Children, forwardRef, useImperativeHandle, useReducer, useRef, useState } from "react";

// 子组件
const Child = forwardRef(function(props, ref){
  useImperativeHandle(ref, () => ({
    // 暴露给父组件的方法
    myFn: () => {
      console.log('子组件的myFn方法被调用')
    }
  }))
  return (
    <div>
      子组件
    </div>
  )
})

function App() {

  const childRef = useRef()

  function handleClick(){
    childRef.current.myFn()
  }

  return (
    <div>
      {/* 子组件 */}
      <Child ref = {childRef}/>
      <button onClick={handleClick}>按钮</button>
    </div>
  )

}

export default App;
