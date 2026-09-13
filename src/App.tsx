import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutBase from './layouts/LayoutBase.tsx';

import Home from './pages/Home';
import Contato from './pages/Contato';
import Solucao from './pages/Solucao';
import Sobre from './pages/Sobre';
import Integrantes from './pages/Integrantes.tsx';
import NotFound from './layouts/NotFound.tsx';

export default function App()
{
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutBase />}>
          <Route path="/" element={<Home />} />
          <Route path="/solucao" element={<Solucao />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
