##项目笔记
##创建项目
npm init vite
选择 React + ts

安装项目依赖
在package.json 中添加依赖配置
"react-redux": "^7.2.8",
"react-router-dom": "^6.3.0",
"redux": "^4.1.0"

执行 npm i 安装依赖

启动项目
npm run dev

##项目目录初始化
src文件夹中 删除不用的CSS文件，将根组件APP.tsx中的页面结构删除，保留一个div标签


##样式初始化
安装reset.css (比Normalize.css更直接，干净利落去除默认样式，更适合企业场景)
npm i reset-css

在src/main.tsx中引入reset-css:
import "reset-css"

##scss安装和初步使用

安装sass
npm i --save-dev sass 

##配置项目路径别名
-路径别名的配置 @相当于src文件夹
在vite.config.ts中添加配置：
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      "@":path.resolve(__dirname,'./src')
    }
  }
})

这时候引入的path模块会报红，原因是缺少关于node这个库的ts声明配置。
安装@types/node

npm i -D @types/node 

当vite版本比较低时，import 后的 path 可能会报红，这是引入语句改为import * as path from 'path' 

-配置路径别名的提示
在引入时@/后提示文件，需要在tsconfig.json中，添加两项配置

"compilerOptions": {
    ...

    "baseUrl": "./",
    "paths": {
      "@/*":[
        "src/*"
      ]
}

这样输入@/后就有路径资源提示了

##antD 初步引入

安装
npm install antd --save

安装图标所需要的模块
npm install --save @ant-design/icons

