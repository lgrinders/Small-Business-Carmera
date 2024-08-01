import { Nav } from "../components/Nav";
import { BackToTopButton } from "../components/BackToTopButton";
import { Seperator } from "../components/Seperator";
import { Footer } from "../components/Footer";
import { Gallery } from "../components/Gallery";
import { Link } from "react-router-dom";

export function Portfolio() {
  return (
    <>
      <div
        className="bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]
        bg-[size:6rem_4rem] font-rubik"
      >
        <Nav />
        <BackToTopButton />
        <div className="m-auto max-w-[1400px] flex-col items-center justify-center p-5 text-center">
          <div className="xl:pt-28">
            <div className="pt-28 text-5xl font-black">
              <div className="inline text-pagani-orange">
                <a href="#home">CAR</a>
              </div>
              <Link to="/">
                MERA<div className="inline text-orange-400">+</div>
              </Link>
            </div>
            <Gallery />
          </div>
        </div>
        <Seperator />
        <Footer />
      </div>
    </>
  );
}
