import { useState, memo , useCallback } from "react";

// 使用memo设置为记忆组件，避免重新渲染
const Button = memo(function Button({ onClick }) {
  console.log("Button 重新渲染");
  return <button onClick={onClick}>子组件</button>
}) 

function App() {
  const [count, setCount] = useState(0);
  function handleUpdate() {
    setCount(count + 1);
  }

  // 这里使用useCallback来缓存handleClick函数，
  // 避免导致子组件Button认为每次传入的onClick都是新渲染的函数而导致Button重新渲染
  const handleClick = useCallback(() => {
    console.log("点击按钮");
  }, [])

  return (
    <div>
      <p>count值 {count}</p>
      <button onClick={handleUpdate}>点击更新</button>
      <br />
      <Button onClick = {handleClick}/>
    </div>
  )

}

export default App;
