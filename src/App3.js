
// function Article(prop){
//   return (
//     <div>
//       <h2>{prop.title}</h2>
//       <p>{prop.content}</p>
//     </div>
//   )
// }

function Detail({content, active}){

  return (
    <>
      <p>{content}</p>
      <p>{active ? '显示':'不显示'}</p>
    </>
  )
}

// 解构
function Article({title, detailData}){
  return (
    <div>
      <h2>{title}</h2>
      <Detail {...detailData}></Detail>
    </div>
  )
}
// 父组件向子组件传值
function App() {
  const articleData = {
    title: '标题',
    detailData : {
      content: '内容',
      active: true
    }
  }
  return (
    <div>
      <Article {...articleData} ></Article>
    </div>
  )
}

export default App;
