import { Login } from "../components/Login";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

export function SignIn() {
  return (
    <>
      <div className="bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] font-rubik">
        <Nav />
        <div className="m-auto max-w-[1400px] flex-col items-center justify-center  p-5">
          <Login />
          <Footer />
        </div>
      </div>
    </>
  );
}
