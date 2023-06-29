
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from "../pages/home";


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}