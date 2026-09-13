import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutBase from './layouts/LayoutBase.tsx';

import Home from './pages/Home';
import Solucao from './components/Solução/Solucao.tsx';

export default function App()
{
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutBase />}>
          <Route path="/" element={<Home />} />
          <Route path="/solucao" element={<Solucao />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
