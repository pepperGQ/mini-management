import React from 'react'
import ReactDOM from 'react-dom/client'

// 正确的样式引入样式
// 初始化样式，一般放在最前，因为APP中会有自定义的样式
import 'reset-css'
// UI框架样式 antd 4版本还需要引入样式，现在使用的是5版本 不需要引入样式


// 全局样式
import '@/assets/styles/global.scss'

// 组件样式
import App from './App.tsx'

// 路由组件写法
// import Router from './router/index copy'

import { BrowserRouter } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* 一、路由组件写法 */}
    {/* <Router/> */}

    {/* 二、路由配置表写法 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </React.StrictMode>,
)
