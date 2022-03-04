import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import ProductList from "./pages/ProductList";
import HomePage from './pages/Home';

//type Props = {}

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/:kategorie" element={<HomePage />} />
                <Route
                    path="/:kategorie/wohnzimmermoebel/"
                    element={<HomePage />}
                />
                <Route
                    path="/:kategorie/schlafzimmermoebel/"
                    element={<HomePage />}
                />
                <Route
                    path="/:kategorie/esszimmermoebel/"
                    element={<HomePage />}
                />
                <Route path="/:kategorie/bueromoebel/" element={<HomePage />} />

                <Route
                    path="/:kategorie/badezimmermoebel/"
                    element={<HomePage />}
                />
                <Route
                    path="/:kategorie/flur-und-diele/"
                    element={<HomePage />}
                />
                <Route
                    path="/:kategorie/kuechenmoebel/"
                    element={<HomePage />}
                />
                <Route
                    path="/:kategorie/kinderzimmermoebel/"
                    element={<HomePage />}
                />
            </Routes>
        </BrowserRouter>
    );
};
export default App;
