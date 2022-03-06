import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/:kategorie" element={<HomePage />} />
                <Route path="/:kategorie/*" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
};
export default App;
