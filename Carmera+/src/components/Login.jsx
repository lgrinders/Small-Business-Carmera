import { useState } from "react";

export function Login() {
    const [emailInput, setEmailInput] = useState("");
    const [userName, setUserName] = useState("");

    console.log(userName)    

  return (
    <>
      <div className="mx-auto my-28 flex flex-col items-center justify-center px-6 font-rubik md:py-28">
        <div className="-lg w-full border-2 border-orange-400 bg-white shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Sign In
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-900 "
                >
                  Your email
                </label>

                <input
                  type="email"
                  name="email"
                  id="email"
                  className="focus:ring-primary-600 focus:border-primary-600 -lg block w-full border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm "
                  placeholder="name@company.com"
                  required=""
                  value={emailInput}
                  onChange={e => setEmailInput(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="-lg block w-full border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
                  required=""
                />
              </div>
              <div className="flex w-full justify-center">
                <button 
                onClick={() => setUserName(emailInput)}
                className="w-full bg-pagani-orange p-2.5 text-center text-white duration-200 hover:bg-orange-400">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
