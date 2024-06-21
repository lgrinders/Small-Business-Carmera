import { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Footer() {
  const [userEmail, setUserEmail] = useState("");
  const [inputContent, setInputConent] = useState("");
  return (
    <>
      <div className="relative left-0 w-full" id="contact">
        <div className="flex flex-col justify-center gap-20 pb-10 text-center xl:flex-row xl:text-start">
          <div className="flex flex-col items-center justify-center xl:block">
            <div>
              <Link to="/#home">
                <div className="pb-5 text-4xl font-black">
                  <div className="inline text-pagani-orange">CAR</div>
                  MERA<div className="inline text-orange-400">+</div>
                </div>
              </Link>
            </div>
            <p className="pb-5 font-medium">
              Great Customer Service awaits you. Feel free to contact us at
              <br />
              anytime with any concern that you may have.
            </p>
            <a href="/#home">
              <div className="flex items-center gap-2 pb-5 duration-200 hover:text-pagani-orange">
                <FaPhone />
                <h3>(123) 456-7890</h3>
              </div>
            </a>
            <a href="/#home">
              <div className="flex items-center gap-2 duration-200 hover:text-pagani-orange">
                <FaEnvelope />
                <h3>CarmeraPhotography@gmail.com</h3>
              </div>
            </a>
          </div>
          <div>
            <div>
              <h2 className="pb-5 text-2xl font-bold">Company</h2>
            </div>
            <a href="/#home">
              <div className="gap-2 pb-5 duration-200 hover:text-pagani-orange">
                <h3>Investors</h3>
              </div>
            </a>
            <a href="/#home">
              <div className=" gap-2 pb-5 duration-200 hover:text-pagani-orange">
                <h3>Careers</h3>
              </div>
            </a>
            <a href="/#home">
              <div className=" gap-2 pb-5 duration-200 hover:text-pagani-orange">
                <h3>Mobile</h3>
              </div>
            </a>
          </div>
          <div>
            <div>
              <h2 className="pb-5 text-2xl font-bold">Location Contact</h2>
            </div>
            <a href="/#home">
              <div className="gap-2 pb-5 duration-200 hover:text-pagani-orange">
                <h3>Los Angles CA</h3>
              </div>
            </a>
            <a href="/#home">
              <div className=" gap-2 pb-5 duration-200 hover:text-pagani-orange">
                <h3>New York</h3>
              </div>
            </a>
            <a href="/#home">
              <div className=" gap-2 pb-5 duration-200 hover:text-pagani-orange">
                <h3>Dubai</h3>
              </div>
            </a>
          </div>
          <div className="p-5 xl:w-auto xl:p-0">
            <div>
              <h2 className="pb-5 text-2xl font-bold">Mailing List</h2>
            </div>
            <div className="pb-5 font-medium text-gray-500">
              <p>
                Join our mailing list for news and
                <br /> updates regarding Carmera.
              </p>
            </div>
            <div className="pb-5">
              <input
                value={inputContent}
                onChange={(e) => setInputConent(e.target.value)}
                type="email"
                name="email"
                id="email"
                className="focus:ring-primary-600 focus:border-primary-600 -lg block w-full border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm "
                placeholder="name@company.com"
                required=""
              />
              <label
                htmlFor="floating_email"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400"
              ></label>
            </div>
            <div>
              <button
                onClick={() => {
                  setUserEmail(inputContent), setInputConent("");
                }}
                className=" flex h-[50px] w-full items-center justify-center gap-2 bg-pagani-orange font-semibold text-white shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] duration-300 hover:bg-orange-400"
              >
                {userEmail !== "" ? `Sent!` : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
