import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Filme from './pages/Filme';
import Favoritos from './pages/Favoritos';
import Header from './components/Header';
import Erro from './pages/Erro';

function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="*" element={<Erro />} />
                <Route exact path="/" element={<Home />} />
                <Route exact path="/filme/:id" element={<Filme />} />
                <Route exact path="/favoritos" element={<Favoritos />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
