
import Home from '../views/Home'
import About from '../views/about'
import {Navigate} from 'react-router-dom'
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
        element:<About/>
    },
]

export default routes