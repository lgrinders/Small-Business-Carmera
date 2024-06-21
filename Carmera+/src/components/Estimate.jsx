import { useState } from "react";
import estimateData from "../assets/other/estimateData.json";
import { FaCaretDown, FaCaretUp, FaChevronRight } from "react-icons/fa";

export function Estimate() {
  const [isValueOpen, setIsValueOpen] = useState(false);
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [isPickOpen, setIsPickOpen] = useState(false);
  const [isDropOpen, setIsDropOpen] = useState(false);
  const [value, setValue] = useState("");
  const [type, setType] = useState("");
  const [pick, setPick] = useState("");
  const [drop, setDrop] = useState("");
  const [estimateFinal, setEstimateFinal] = useState(0);
  const [estimateBtn, setEstimateBtn] = useState(true);
  const [getEstimate, setGetEstimate] = useState(true);

  function handleEstimate() {
    let valuesArray = [value, type, pick, drop];

    let total = 0;

    function isNotBlank(item) {
      return item !== "";
    }

    let res = valuesArray.every(isNotBlank);

    if (res) {
      estimateData[0].forEach((array) => {
        if (array.value === value) {
          total += array.cost;
        }
      });

      if (pick !== drop) {
        total += 1000;
      }

      setEstimateFinal(total);

      setGetEstimate(true);
      setEstimateBtn(true);
    } else {
      setEstimateBtn(false);
      setGetEstimate(false);
    }
  }

  return (
    <>
      <div className="pt-28" id="estimate">
        <div className="bg-white font-rubik">
          <div className="bg-white relative p-5 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
            <div className="pb-5 text-2xl font-semibold text-black">
              Get an Estimate
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
            <div className="grid-cols-3 gap-2 lg:grid">
              <div className="relative mb-2 xl:mb-0">
                <button
                  onClick={() => setIsValueOpen((prev) => !prev)}
                  className="flex w-full items-center justify-between bg-pagani-orange p-5 hover:bg-orange-400"
                >
                  <div>{`Value: ${value}`}</div>
                  {!isValueOpen ? <FaCaretDown /> : <FaCaretUp />}
                </button>

                {isValueOpen && (
                  <div className="absolute top-20 z-10 flex w-full flex-col items-start bg-orange-400 p-2">
                    {estimateData[0].map((item, i) => (
                      <div
                        onClick={() => {
                          setValue(item.value), setIsValueOpen(false);
                        }}
                        className="flex w-full cursor-pointer justify-between border-l-4 border-l-transparent p-4 hover:border-l-white hover:bg-pagani-orange"
                        key={i}
                      >
                        <h3>{item.value}</h3>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative mb-2 xl:mb-0">
                <button
                  onClick={() => setIsTypeOpen((prev) => !prev)}
                  className="flex w-full items-center justify-between bg-pagani-orange p-5  hover:bg-orange-400"
                >
                  <div> {`Type: ${type}`}</div>
                  {!isTypeOpen ? <FaCaretDown /> : <FaCaretUp />}
                </button>

                {isTypeOpen && (
                  <div className="absolute top-20 z-10 flex w-full flex-col items-start bg-orange-400 p-2">
                    {estimateData[1].map((item, i) => (
                      <div
                        onClick={() => {
                          setType(item.type), setIsTypeOpen(false);
                        }}
                        className="flex w-full cursor-pointer justify-between border-l-4 border-l-transparent  p-4 hover:border-l-white hover:bg-pagani-orange"
                        key={i}
                      >
                        <h3>{item.type}</h3>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative mb-2 xl:mb-0">
                <button
                  onClick={() => setIsPickOpen((prev) => !prev)}
                  className="flex  w-full items-center justify-between bg-pagani-orange p-5  hover:bg-orange-400"
                >
                  <div> {`Pick Up: ${pick}`}</div>
                  {!isPickOpen ? <FaCaretDown /> : <FaCaretUp />}
                </button>

                {isPickOpen && (
                  <div className="absolute top-20 z-10 flex w-full flex-col items-start bg-orange-400 p-2">
                    {estimateData[2].map((item, i) => (
                      <div
                        onClick={() => {
                          setPick(item.location), setIsPickOpen(false);
                        }}
                        className="flex w-full cursor-pointer justify-between border-l-4 border-l-transparent  p-4 hover:border-l-white hover:bg-pagani-orange"
                        key={i}
                      >
                        <h3>{item.location}</h3>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative mb-2 xl:mb-0">
                <button
                  onClick={() => setIsDropOpen((prev) => !prev)}
                  className="flex  w-full items-center justify-between bg-pagani-orange p-5  hover:bg-orange-400"
                >
                  <div> {`Drop Off: ${drop}`}</div>
                  {!isDropOpen ? <FaCaretDown /> : <FaCaretUp />}
                </button>

                {isDropOpen && (
                  <div className="absolute top-20 z-10 flex w-full flex-col items-start bg-orange-400 p-2">
                    {estimateData[2].map((item, i) => (
                      <div
                        onClick={() => {
                          setDrop(item.location), setIsDropOpen(false);
                        }}
                        className="flex w-full cursor-pointer justify-between border-l-4 border-l-transparent  p-4 hover:border-l-white hover:bg-pagani-orange"
                        key={i}
                      >
                        <h3>{item.location}</h3>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative mb-2 xl:mb-0">
                <button
                  onClick={() => handleEstimate()}
                  className={
                    estimateBtn
                      ? "flex w-full items-center justify-between border-transparent bg-pagani-black p-5 text-white duration-200 hover:border-black hover:bg-white hover:text-black hover:shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"
                      : "flex w-full items-center justify-between border-transparent bg-red-600 p-5 text-white duration-200 hover:border-black hover:bg-white hover:text-black hover:shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"
                  }
                >
                  <div className="flex items-center gap-2">
                    {getEstimate ? "Get Estimate" : "Fill all fields"}
                    <FaChevronRight />
                  </div>
                </button>
              </div>

              <div className="relative mb-2 xl:mb-0">
                <button className="flex w-full cursor-default items-center justify-between bg-slate-100 p-5">
                  {`Estimate total: $${estimateFinal}`}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
