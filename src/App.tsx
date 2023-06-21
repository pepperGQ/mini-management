
import {useRoutes,Link} from 'react-router-dom'
import router from './router'



function App() {
  const outlet = useRoutes(router)
  return (
    <>
      <div>
        <Link to='/home'>Home</Link>
        <Link  to='/about'>About</Link>
        {/* 一、路由组件写法 */}
        {/* 路由占位组件 */}
        {/* <Outlet></Outlet> */}

        {/*二、 路由配置表写法 */}
        {outlet}
      </div>
    </>
  )
}

export default App
