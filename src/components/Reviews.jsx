import customer1 from "../assets/images/customer1.jpg";
import customer2 from "../assets/images/customer2.jpg";
import { BsChatQuoteFill } from "react-icons/bs";

export function Reviews() {
  return (
    <>
      <div className="py-28 text-center">
        <div>
          <div className="mb-20">
            <h3 className="mb-1 text-xl font-bold xl:text-2xl">
              Customer Reviews
            </h3>
            <h2 className="mb-5 text-3xl font-bold xl:text-5xl">
              Client's Testimonials
            </h2>
            <p>
              See for yourself how we have brought customers ideas to life. Our
              clients love to share what we've done for them and we are sure
              that you will feel the exact same way too!
            </p>
          </div>
          <div className="flex justify-center gap-10">
            <div className="hidden max-w-xl bg-white p-10 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] xl:block">
              <div className="mb-10 text-2xl font-semibold">
                "Carmera is one of the best services that I have used when it
                comes to my prized vehicles. I am absolutely in love with the
                photos they created with my Ferarri".
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-5 text-start">
                  <img src={customer1} className="w-20 rounded-full" />
                  <div className="">
                    <h2 className="text-lg font-bold">Devin Kurant</h2>
                    <h3 className="font-semibold">Pheonix AZ</h3>
                  </div>
                </div>
                <BsChatQuoteFill size={40} className="text-pagani-orange" />
              </div>
            </div>
            <div className="max-w-xl bg-white p-10 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
              <div className="mb-10 text-xl font-semibold xl:text-2xl">
                "I could not be happier with the photos that I recieved from
                Carmera. They were quick and there isnt a single scratch on my
                beloved car".
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-5 text-start">
                  <img src={customer2} className="w-20 rounded-full" />
                  <div className="">
                    <h2 className="text-lg font-bold">Lawhi Keonard</h2>
                    <h3 className="font-semibold">Los Angles CA</h3>
                  </div>
                </div>
                <BsChatQuoteFill size={40} className="text-pagani-orange" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
