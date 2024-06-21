import logo from './logo.svg';
import './App.css';
import { Fragment, useState } from 'react';

function App() {

  // const divContent = '标签内容'
  const divTitle = '标签标题'

  const flag = false 

  let divContent = null

  if(flag) {
    divContent = <span>flag是true</span>
  } else {
    divContent = <p>flag是false</p>
  }

  const nameList = [
    {id:1,"name":"张三"},
    {id:2,"name":"李四"},
    {id:3,"name":"王五"}
  ]

  
  const ulList = nameList.map(item => (
    // 使用 Fragment 设置多个标签
    <Fragment key={item.id}>
      <li>{item.name}</li>
      <li >----------</li>
    </Fragment>
  ))

  // 设置状态
const [conent, setContent] = useState('标签的默认内容')
  // 对象操作
const [data, setData] = useState({
  title: '默认标题',
  content: '默认内容',
})

// 按钮事件
  function handleClick(e) {
    // console.log("点击按钮",e)
    setContent('新内容')
  }

  function handleClick2(e) {
    // console.log("点击按钮",e)
    setData({
      // 复制之前属性
      ...data,
      // 设置新标题
      title: '新标题'
    })
  }

  // 只能return 一个根元素
  return (
    <>
        <div>{conent}</div>
        <button onClick={handleClick}>按钮</button>
        <div title={data.title}>{data.content}</div>
        <button onClick={handleClick2}>按钮</button>
    </>
    // <ul>{ulList}</ul>
    // <div title={divTitle}>{divContent}</div>
    // <div className="App">
    //   <header className="App-header"> 
    //     // jsx 插值写法  {}
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  )
}

export default App;
