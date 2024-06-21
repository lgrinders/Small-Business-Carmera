import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Estimate } from "../components/Estimate";
import { Info } from "../components/Info";
import { Locations } from "../components/Locations";
import { Seperator } from "../components/Seperator";
import { WhyUs } from "../components/WhyUs";
import { Reviews } from "../components/Reviews";
import { Footer } from "../components/Footer";
import { BackToTopButton } from "../components/BackToTopButton";

export function Home() {
  return (
    <>
      <div className="bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] font-rubik">
        <Nav />
        <BackToTopButton />
        <div className="m-auto max-w-[1400px] flex-col items-center justify-center p-10">
          <Hero />
          <Estimate />
          <Info />
          <Locations />
          <Seperator />
          <WhyUs />
          <Reviews />
          <Footer />
        </div>
      </div>
    </>
  );
}
