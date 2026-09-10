import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer.tsx';
import Header from "./components/Header/Header.tsx";
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
}