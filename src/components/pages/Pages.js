import Home from "./Home";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import Cuisine from "./Cuisine";
import SearchPage from "./SearchPage";
import Recipie from "./Recipie";
import { AnimatePresence } from "framer-motion";

const Pages = () => {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='/cuisine/:type' element={<Cuisine />} />
                <Route path='/search/:item' element={<SearchPage />} />
                <Route path='/recipie/:id' element={<Recipie />} />
            </Routes>
        </AnimatePresence>
    );
};

export default Pages;
