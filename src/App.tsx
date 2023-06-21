import { useState } from 'react'
import { Button } from 'antd';
import{UpCircleOutlined} from '@ant-design/icons'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>顶级组件
      <Button type="primary">Primary Button</Button>
      <UpCircleOutlined style={{fontSize: '50px',color:'green'}}/>
      </div>
    </>
  )
}

export default App
