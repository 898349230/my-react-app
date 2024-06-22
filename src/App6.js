import { useReducer, useRef, useState } from "react";


function App() {

  const inputRef = useRef(null)

  function handleClick(){
    // inputRef DOM 对象
    inputRef.current.focus()
  }

  return (
    <div>
      <input type='text' ref={inputRef} />
      <button onClick={handleClick}>按钮</button>
    </div>
  )

}

export default App;
