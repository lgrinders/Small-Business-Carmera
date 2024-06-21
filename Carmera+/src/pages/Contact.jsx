import { Nav } from "../components/Nav";
import { Seperator } from "../components/Seperator";
import { Footer } from "../components/Footer";
import { UserInfo } from "../components/UserInfo";
import { BackToTopButton } from "../components/BackToTopButton";

export function Contact() {
  return (
    <>
      <div
        className="bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]
        bg-[size:6rem_4rem] font-rubik"
      >
        <Nav />
        <BackToTopButton />
        <div className="overflow-x-hidden">
          <UserInfo />
        </div>

        <Seperator />
        <Footer />
      </div>
    </>
  );
}
