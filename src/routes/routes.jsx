import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/home'
import { PokemonDetailPage } from '../pages/PokemonDetailPage/index.jsx'

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/details/:name' element={<PokemonDetailPage />} />
            </Routes>
        </BrowserRouter>
    )
}