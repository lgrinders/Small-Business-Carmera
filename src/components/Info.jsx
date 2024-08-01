import { FaTruckMoving } from "react-icons/fa";
import { MdCamera } from "react-icons/md";
import { IoCarSport } from "react-icons/io5";

export function Info() {
  return (
    <>
      <div className="pt-52 xl:pt-40">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-5 text-2xl font-bold">Celebrate your car</div>
          <div className="mb-16 text-5xl font-bold">
            Convenient & Trusted Photography
          </div>
        </div>
        <div className="m-auto items-baseline justify-center gap-5 xl:mt-5 xl:flex">
          <div className="flex flex-col items-center justify-center">
            <div className="mb-5 rounded-full bg-pagani-orange p-10 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
              <FaTruckMoving
                size={50}
                className="text-white hover:animate-pulse duration-300"
              />
            </div>
            <div className="w-72 text-center">
              <div className="pb-2 text-2xl font-bold">Reliable Pickup</div>
              <div className="mb-10">
                Getting your dream photos has never been easier! We come right
                to your door if your vehicle is in one of our select cities.
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="mb-5 rounded-full bg-pagani-orange p-10 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] ">
              <MdCamera
                size={50}
                className="text-white duration-300 hover:rotate-180"
              />
            </div>
            <div className="w-72 text-center">
              <div className="pb-2 text-2xl font-bold">Outstanding Photos</div>
              <div className="mb-10">
                Creating wonderful pieces of art is out passion. We take out
                time to generate amazing creations that will blow you away.
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="mb-5 rounded-full bg-pagani-orange p-10 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] duration-200 hover:hue-rotate-90">
              <IoCarSport size={50} className="text-white" />
            </div>
            <div className="w-72 text-center">
              <div className="pb-2 text-2xl font-bold">Easy Delivery</div>
              <div>
                After we have taken the best photos possible, we deliver your
                vehicle right to your door.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
