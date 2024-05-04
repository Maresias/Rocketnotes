import { Routes, Route } from 'react-router-dom'

import { New } from '../pages/SignIn'
import { Home } from '../pages/SignUp'

export function AppRoutes(){
    return (
        <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/new' element={ <New/> } />
        </Routes>
    )
}