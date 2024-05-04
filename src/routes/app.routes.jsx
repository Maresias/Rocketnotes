import { Routes, Router} from 'react-router-dom'

import { New } from '../pages/New'
import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { Details } from '../pages/Details'

export function AppRoutes() {
    return (
        <Routes>
            <Router path="/" element={ <Home />} />
            <Router path="/new" element={ <New />} />
            <Router path="/profile" elemnt={ <Profile />} />
            <Router path="/details" elemnt={ <Details />} />
        </Routes>
    )
}