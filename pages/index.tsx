import HeroSection from "../components/home/HeroSection";
import BrandShowcase from "../components/home/BrandShowcase";
import ServicesOverview from "../components/home/ServicesOverview";
import NasiyePromo from "../components/home/NasiyePromo";

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <BrandShowcase />
      <ServicesOverview />
      <NasiyePromo />
    </div>
  );
};

export default Home;
