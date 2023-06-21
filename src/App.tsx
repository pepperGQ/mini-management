import { useState } from 'react'

import {Outlet,Link} from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Link to='/home'>Home</Link>
        <Link  to='/about'>About</Link>
        {/* 路由占位组件 */}
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
