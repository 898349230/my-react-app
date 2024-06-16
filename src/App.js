import logo from './logo.svg';
import './App.css';

function App() {

  // const divContent = '标签内容'
  const divTitle = '标签标题'

  const flag = true 

  // 只能return 一个根元素
  return (
    <div title={divTitle}>{divContent}</div>
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
  );
}

export default App;
