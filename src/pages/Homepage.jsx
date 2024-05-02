import ButtonGradient from "../assets/svg/ButtonGradient";
import Header from "../components/Header";
import HeroSec from "../components/HeroSec";
import Benefits from "../components/Benefits";

const Homepage = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <HeroSec />
        <Benefits />
      </div>
      <ButtonGradient />
    </>
  );
};

export default Homepage;
