import { useState,useMemo } from "react";

function DoSomeMath ({value}) {
  // console.log("DoSomeMath value:", value);
  // let result = 0;
  // // 每次外部组件更新，都会触发子组件的重新渲染
  // for (let i = 0; i < 1000; i++) {
  //   result += value * 2
  // }

  // 使用useMemo缓存计算结果
  // 只有当value变化时，才会重新计算result
  const result = useMemo(() => {
    let result = 0;
    for (let i = 0; i < 1000; i++) {
      result += value * 2
    }
    console.log("useMemo:", value);
    return result
  },[value])
  return (
    <div>
      <p>输入内容 {value}</p>
      <p>计算后 {result}</p>
    </div>
  )
}

function App() {

  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(5);
  

  return (
    <div>
      <p>count值 {count}</p>
      <button onClick={() => setCount(count + 1)}>点击更新</button>
      <br />
      <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <DoSomeMath value = {inputValue}/>
    </div>
  )

}

export default App;
