import ButtonGradient from "./assets/svg/ButtonGradient";

import Header from "./components/Header";
import HeroSec from "./components/HeroSec";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <HeroSec />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
