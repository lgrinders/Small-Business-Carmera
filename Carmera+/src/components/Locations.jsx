import { useState } from "react";
import locationData from "../assets/other/locationData.json";

export function Locations() {
  const [selected, setSelected] = useState(0);

  console.log(selected);

  return (
    <>
      <div className="pt-28" id="locations">
        <div className="mb-16 flex flex-col items-center justify-center text-center">
          <div className="pb-6 text-5xl font-bold">Photoshoot Locations</div>
          <div className="font-medium">
            Choose from a variety of stunning locations to give the desired look
            and feel to your photos.
          </div>
        </div>

        <div className="relative justify-center gap-5 bg-white p-5 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] lg:flex lg:flex-row">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

          <div className="z-10 mb-5 flex flex-col items-center justify-center lg:mb-0 lg:w-1/2">
            {locationData.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setSelected(index)}
                  className={
                    index === selected
                      ? "relative z-10 flex h-full w-full items-center bg-pagani-orange p-5 pl-5 text-xl font-semibold text-white my-1 duration-200"
                      : "relative z-10 flex h-full w-full items-center bg-slate-100 p-5 pl-5 text-xl font-semibold my-1 hover:bg-orange-400 active:shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] duration-200"
                  }
                >
                  {item.name}
                </button>
              );
            })}
          </div>
          <div className="z-10 flex flex-col items-center justify-center">
            <div>
              {locationData.map((item, index) => {
                return (
                  <img
                    key={index}
                    src={item.image}
                    loading="lazy"
                    className={
                      index === selected
                        ? "relative z-10 h-[460px] w-[800px] object-cover"
                        : "hidden"
                    }
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
