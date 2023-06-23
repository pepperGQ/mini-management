import React,{ lazy } from 'react'
import Home from '../views/Home'
// import About from '../views/about'
import {Navigate} from 'react-router-dom'


const Page1 = lazy(()=>import('../views/Page1'))
const Page2 = lazy(()=>import('../views/Page2'))
const Page301 = lazy(()=>import('../views/About'))

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
        element:<Navigate to='/home/page1' />
    },
    {
        path:"/home",
        element:<Home/>,
        children:[
            {
                path:"page1",
                element:withLoadingComponents(<Page1/>) 
            },
            {
                path:"page2",
                element:withLoadingComponents(<Page2/>) 
            },
            {
                path:"page3/page31",
                element:withLoadingComponents(<Page301/>) 
            },
        ]
    },
    {
        path:"*",
        element:<Navigate to='/home/page1' />
    },
    
]

export default routes