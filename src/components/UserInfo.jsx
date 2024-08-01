import coverPhoto from "../assets/images/cover-photo.jpg";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";

export function UserInfo() {
  return (
    <>
      <div className="flex h-96 w-screen justify-center xl:mt-28 xl:h-max">
        <img src={coverPhoto} className=" w-full object-cover opacity-50" />
      </div>
      <div className="flex flex-col items-center justify-center gap-10 pt-28 xl:flex-row xl:items-start">
        <div className="flex w-96 flex-col items-center justify-center text-center">
          <h2 className="pb-5 text-4xl font-bold xl:text-5xl">
            Need more Information?
          </h2>
          <p className="pb-5">
            Get in contact with us with the info provided below and we will get
            back with you as quickly as possible.
          </p>
          <div className="flex flex-col gap-4 font-semibold">
            <Link
              className="flex items-center gap-2 duration-200 hover:text-orange-400"
              to={"/#home"}
            >
              <FaPhone size={20} />
              (123) 456-7890
            </Link>
            <Link
              className="flex items-center gap-2 duration-200 hover:text-orange-400"
              to={"/#home"}
            >
              <FaEnvelope size={20} />
              <h3>CarmeraPhotography@gmail.com</h3>
            </Link>
            <Link
              className="flex items-center gap-2 duration-200 hover:text-orange-400"
              to={"/#home"}
            >
              <FaLocationDot size={20} />
              <h3>Los Angles CA</h3>
            </Link>
          </div>
        </div>
        <div className="w-full px-10 xl:w-1/3">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <label className="font-semibold">
                Full Name <div className="inline text-pagani-orange">*</div>
              </label>
              <input
                className="block w-full border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm "
                placeholder="First and Last name"
                required=""
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">
                Email <div className="inline text-pagani-orange">*</div>
              </label>
              <input
                className="block w-full border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm "
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">
                Tell Us About It{" "}
                <div className="inline text-pagani-orange">*</div>
              </label>
              <textarea
                className="block w-full resize-none border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm "
                placeholder="First and Last name"
                required=""
              />
            </div>
            <button className="bg-pagani-orange p-4 text-xl font-bold text-white shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] duration-200 hover:bg-orange-400">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
