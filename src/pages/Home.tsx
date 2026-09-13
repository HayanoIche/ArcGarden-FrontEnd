import HeroSection from '../components/Home/HeroSection';
import Funcionalidades from '../components/Home/Funcionalidades';
import ComoFunciona from '../components/Home/ComoFunciona';
import Ranking from '../components/Home/Ranking';
import Integracao from '../components/Home/Integracao';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Funcionalidades />
      <ComoFunciona />
      <Ranking />
      <Integracao />
    </div>
  );
}