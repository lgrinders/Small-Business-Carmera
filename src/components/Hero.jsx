import heroImg from "../assets/images/heroImg.png";
import heroImg2 from "../assets/images/heroImg2.png";
import { FaCircleCheck, FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <>
      <div className="flex w-full justify-center pt-28 xl:h-screen xl:items-center xl:justify-between xl:pt-0">
        <div className="relative z-20 flex flex-col text-center xl:text-start">
          <div className="text-2xl font-bold">Top Tier Service</div>
          <div className="pb-6 pt-4 text-5xl font-bold">
            Luxury and Exotic
            <br /> Photography
          </div>
          <div className="font-semibold">
            We transport youre vehicle with care and create magic
          </div>
          <div className="flex justify-center gap-5 pt-10 xl:justify-start">
            <div className="h-[60px] w-[160px] xl:h-[65px] xl:w-[180px]">
              <a href="#estimate">
                <button className="flex h-full w-full items-center justify-center gap-3 bg-pagani-orange text-lg font-bold text-white duration-200 hover:bg-orange-400">
                  Estimate <FaCircleCheck />
                </button>
              </a>
            </div>
            <div className="h-[60px] w-[160px] xl:h-[65px] xl:w-[180px]">
              <Link to={"/Portfolio#top"}>
                <button className="flex h-full w-full items-center justify-center gap-3 border-transparent bg-pagani-black text-lg font-bold text-white duration-200 hover:bg-white hover:text-black hover:shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
                  Examples <FaChevronRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img
            src={heroImg}
            className="hidden xl:block xl:max-w-3xl 2xl:max-w-4xl"
          />
          <div className="">
            <img
              src={heroImg2}
              className="absolute right-0 top-24 z-10 max-w-xl opacity-50 xl:hidden"
            />
          </div>
        </div>
      </div>
    </>
  );
}
