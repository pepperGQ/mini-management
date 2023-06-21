import { useState } from 'react'
import Comp from './components/Comp1'
import Comp2 from './components/Comp2'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>顶级组件
        <Comp/>
        <Comp2/>
      </div>
    </>
  )
}

export default App
