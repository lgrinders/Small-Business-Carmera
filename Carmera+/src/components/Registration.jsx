import { Link } from "react-router-dom";

export function Registration() {
  return (
    <>
      <div class="mx-auto flex flex-col items-center justify-center px-6 my-28 font-rubik md:py-28">
        <div class="border-2 -lg w-full border-orange-400 bg-white shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] sm:max-w-md md:mt-0 xl:p-0">
          <div class="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Create an account
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="email"
                  class="mb-2 block text-sm font-medium text-gray-900 "
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="focus:ring-primary-600 focus:border-primary-600 -lg block w-full border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm "
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  class="mb-2 block text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="focus:ring-primary-600 focus:border-primary-600 -lg block w-full border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm "
                  required=""
                />
              </div>
              <div>
                <label
                  for="confirm-password"
                  class="mb-2 block text-sm font-medium text-gray-900 "
                >
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  class="focus:ring-primary-600 focus:border-primary-600 -lg block w-full border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm "
                  required=""
                />
              </div>
              <div class="flex items-start">
                <div class="flex h-5 items-center">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    class="focus:ring-3 focus:ring-primary-300  h-4 w-4  border border-gray-300 bg-gray-50   "
                    required=""
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="terms" class="font-light text-gray-500 ">
                    I accept the{" "}
                    <a
                      class="text-primary-600  font-medium hover:underline"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                class="bg-pagani-orange hover:bg-orange-400 w-full py-2.5 text-center text-white duration-200"
              >
                Create an account
              </button>
              <p class="text-sm font-light text-gray-500 ">
                Already have an account?{" "}
                <Link
                  to="/SignIn"
                  class="text-primary-600 font-medium hover:underline"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
