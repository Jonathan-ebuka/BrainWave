import ButtonGradient from "../assets/svg/ButtonGradient";
import Header from "../components/Header";
import HeroSec from "../components/HeroSec";
import Benefits from "../components/Benefits";
import Colaboration from "../components/Colaboration";

const Homepage = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <HeroSec />
        <Benefits />
        <Colaboration />
      </div>
      <ButtonGradient />
    </>
  );
};

export default Homepage;
