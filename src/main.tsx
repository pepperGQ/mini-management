import React from 'react'
import ReactDOM from 'react-dom/client'

// 正确的样式引入样式
// 初始化样式，一般放在最前，因为APP中会有自定义的样式
import 'reset-css'
// UI框架样式


// 全局样式
import '@/assets/styles/global.scss'

// 组件样式
import App from './App.tsx'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
