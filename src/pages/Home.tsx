import HeroSection from '../components/Home/HeroSection';
import Funcionalidades from '../components/Home/Funcionalidades';
import ComoFunciona from '../components/Home/ComoFunciona';
import Ranking from '../components/Home/Ranking';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Funcionalidades />
      <ComoFunciona />
      <Ranking />
    </div>
  );
}