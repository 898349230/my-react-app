import { useState } from "react";


function Detail ({onActive}) {

  const [status, setStatus] = useState(true)

  function handleClick(){
    setStatus(!status)
    // 向父组件传递 status 值
    onActive(status)
  }

  return (
    <div>
      <button onClick={handleClick}>按钮</button>
      <p style={{
        display: status?'block':'none'
      }}>detail内容</p>
    </div>
  )
}

// 子组件向父组件传值
function App() {
  // 接受子组件传递过来的值
  function handleActive (status) {
    console.log('status = ',status)
  }

  return (
    <div>
      <Detail 
      onActive={handleActive}
      ></Detail>
    </div>
  )
}

export default App;
