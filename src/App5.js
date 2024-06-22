import { useReducer, useState } from "react";


function countReducer(state, action){
  switch (action.type) {
    case "increment":
      return state + 1
    case "decrement":
      return state - 1
    default:
      throw new Error()
  }
}

// 使用 useReducer  Hook
function App() {
  // useReducer Hook    dispatch 触发状态变更
  const [state, dispatch] = useReducer(countReducer, 0)
  // type 类型 decrement
  const handleDecrement = () => dispatch({type: "decrement"})
  const handleIncrement = () => dispatch({type: "increment"})

  return (
    <div style={{padding: 10}}>
      <button onClick={handleDecrement}>-</button>
      <span>{state}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  )
}

export default App;
