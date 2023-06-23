
import React, { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate,useLocation } from 'react-router-dom';



type MenuItem = Required<MenuProps>['items'][number];

// function getItem(
//     label: React.ReactNode,
//     key: React.Key,
//     icon?: React.ReactNode,
//     children?: MenuItem[],
// ): MenuItem {
//     return {
//         key,
//         icon,
//         children,
//         label,
//     } as MenuItem;
// }

// const items: MenuItem[] = [
//     getItem('Option 1', '/home/page1', <PieChartOutlined />),
//     getItem('Option 2', '/home/page2', <DesktopOutlined />),
//     getItem('User', 'sub1', <UserOutlined />, [
//         getItem('Tom', '3'),
//         getItem('Bill', '4'),
//         getItem('Alex', '5'),
//     ]),
//     getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//     getItem('Files', '9', <FileOutlined />),
// ];


// 登录请求导数据后，与这个item数组进行匹配
const  items: MenuItem[] = [
    {
    label: 'Option 1',
    key: '/home/page1',
    icon:  <PieChartOutlined />
    },
    {
        label: 'Option 2',
        key: '/home/page2',
        icon:  <DesktopOutlined />
    },
    {
        label: 'User',
        key: '/home/page3',
        icon:  <UserOutlined />,
        children:[
            {
                label: 'Option 3',
                key: '/home/page3/page31'
            },
            {
                label: 'Option 4',
                key: '/home/page3/page32'
            },
        ]
    },
    {
        label: 'page4',
        key: '/home/page4',
        icon:  <TeamOutlined />,
        children:[
            {
                label: 'Option 5',
                key: '/home/page4/page31'
            },
            {
                label: 'Option 6',
                key: '/home/page4/page32'
            },
        ]
    },

]


const Comp: React.FC = () => {
    
    const navgateTo = useNavigate()
    const curRoute =  useLocation()
    const [curKey, setCurKey] = useState(['']);
    const menuClick = (e: { key: string }) => {
        console.log('点击了菜单', e.key);

        // 跳转对应的路由  编程式导航
        navgateTo(e.key)
    }

    const handleOpenChange = (openKeys: string[]) => {
        // 点击展开或关闭会执行
        if (openKeys.length > 1) {
            setCurKey([openKeys[openKeys.length - 1]])
        } else {
            setCurKey(openKeys)
        }
    }
    return (
        <Menu
            theme="dark"
            defaultSelectedKeys={[curRoute.pathname]}
            mode="inline" items={items}
            onClick={menuClick}
            onOpenChange={handleOpenChange}
            openKeys={curKey}
        />
    )
}

export default Comp;