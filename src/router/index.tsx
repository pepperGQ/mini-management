import React,{ lazy } from 'react'
import Home from '../views/Home'
// import About from '../views/about'
import {Navigate} from 'react-router-dom'

const About = lazy(()=>import('../views/about'))

// 报错：A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.
// 路由懒加载的组件，外层必须套一个loading的组件


const withLoadingComponents = (comp:JSX.Element) =>(
    <React.Suspense fallback={<div>loading...</div>}>
            {comp}
        </React.Suspense>
)
const routes = [
    {
        path:"/",
        element:<Navigate to='/home' />
    },
    {
        path:"/home",
        element:<Home/>
    },
    {
        path:"/about",
        element:withLoadingComponents(<About/>) 
    },
]

export default routes