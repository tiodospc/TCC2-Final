
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from "../pages/home";
import { ContactUs } from "../pages/main";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path='/contact' element={<ContactUs />} />
            </Routes>
        </BrowserRouter>
    )
}