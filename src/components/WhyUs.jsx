import twocars from "../assets/images/twocars.png";
import { BiSolidCheckShield } from "react-icons/bi";
import { BsFillCameraFill } from "react-icons/bs";
import { IoSpeedometer } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const scrollUp = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export function WhyUs() {
  return (
    <>
      <div className="mt-28 flex-col" id="whyus">
        <div className="flex justify-center">
          <img
            src={twocars}
            className="mb-5 max-w-80 xl:mb-20 xl:block xl:max-w-7xl"
          />
        </div>
        <div className="flex flex-col gap-10 text-center xl:flex-row xl:items-start xl:justify-between xl:text-start">
          <div className="xl:w-1/2">
            <div className="mb-1 text-xl font-bold xl:text-2xl">
              Why Choose Us
            </div>
            <div className="mb-5 text-3xl font-bold xl:text-5xl">
              Trusted with Exotics for over 10 years
            </div>
            <div className="m-auto w-[300px] pb-5 xl:w-full">
              Through the last 10 years we have photographed, taken care of, and
              pleased owners of some of the rarest cars on the planet. Our
              highly qualified employes know exactly what they are doing when it
              comes to your valued vehicle.
            </div>
            <div className="m-auto h-[60px] w-[300px] xl:m-0 xl:h-[65px] xl:w-[180px]">
              <Link to={"/Portfolio"} onClick={() => scrollUp()}>
                <button className="flex h-full w-full items-center justify-center gap-3 border-transparent bg-pagani-black text-lg font-bold text-white duration-200 hover:bg-white hover:text-black hover:shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
                  Examples <FaChevronRight />
                </button>
              </Link>
            </div>
          </div>
          <div className="m-auto flex flex-col items-center xl:block xl:w-1/2">
            <div className="flex items-center gap-10">
              <div className="mb-5 hidden rounded-full bg-pagani-orange p-7 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] xl:block ">
                <BiSolidCheckShield size={40} className="text-white" />
              </div>
              <div className="mb-5">
                <h2 className="mb-5 text-2xl font-bold">
                  Careful Vehicle Handling{" "}
                  <BiSolidCheckShield
                    size={30}
                    className="inline text-pagani-orange xl:hidden"
                  />
                </h2>
                <p className="m-auto w-[300px] pb-5 xl:w-full">
                  We have the experience to take great care of your prized
                  vehicle. We take great pride in our carefulness and appriciate
                  your trust in us.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <div className="mb-5 hidden rounded-full bg-pagani-orange p-7 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] xl:block ">
                <BsFillCameraFill size={40} className="text-white" />
              </div>
              <div className="mb-5">
                <h2 className="mb-5 text-2xl font-bold">
                  Top Photography{" "}
                  <BsFillCameraFill
                    size={30}
                    className="inline text-pagani-orange xl:hidden"
                  />
                </h2>
                <p className="m-auto w-[300px] pb-5 xl:w-full">
                  Photography is what brings cars to life if you can not be
                  there in person, so we express our love for cars through it.
                  Getting the perfect shot is what we live for.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <div className="mb-5 hidden rounded-full bg-pagani-orange p-7 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] xl:block ">
                <IoSpeedometer size={40} className="text-white" />
              </div>
              <div className="mb-5">
                <h2 className="mb-5 text-2xl font-bold">
                  Speedy Pickup & Dropoff{" "}
                  <IoSpeedometer
                    size={30}
                    className="inline text-pagani-orange xl:hidden"
                  />
                </h2>
                <p className="m-auto w-[300px] pb-5 xl:w-full">
                  With our many locations picking up your car and dropping it
                  off have never been easier. If you are withing 500 miles of a
                  location we will handle everything for you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
