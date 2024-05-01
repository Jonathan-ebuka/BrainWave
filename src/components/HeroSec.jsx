import { curve, robot } from "../assets";
import Section from "./Section";
import Button from "./Button";

const HeroSec = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-16 md:mb-20 lg:mb-24">
          <h1 className="h1 mb-6">
            Explore the possibilities of AI chatting with Brainwavecurve
            <span className="inline-block relative">
              Brainwave{" "}
              <img
                src={curve}
                className="absolute top-full xl-mt-2"
                width={624}
                height={28}
                alt="Curved"
              />
            </span>
          </h1>

          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>

          <Button href="/pricing" white>
            Get started
          </Button>
        </div>

        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient ">
            <div className="relative bg-n-8 rounded-[12rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w-full "
                  width={1440}
                  height={1800}
                  alt="hero"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSec;
