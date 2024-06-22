import { useEffect, useState } from "react";

function App() {

  const [state, setState] = useState(0);

  function handleClick(){
    setState(state + 1);
  }

  //  默认每次组件渲染时都执行， 数组表示数组内的变量变化时才会执行
  useEffect(() => {
    console.log('useEffect');
  },[state])

  return (
    <div>
      <p>{state}</p>
      <button onClick={handleClick}>按钮</button>
    </div>
  )

}

export default App;
