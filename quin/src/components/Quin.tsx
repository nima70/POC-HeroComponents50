import React from "react";
import { Button } from "./ui/button";
import NavBar from "./NavBar";
export const Quin: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full prose lg:prose-xl max-w-none bg-[#F3F7FA] bg-gradient-to-b from-[#Faf6eb] to-[#d1dfdc]">
      <NavBar />
      <div className=" flex flex-col-reverse md:flex-row  *:mt-20 mx-10 max-w-5xl ">
        <div className=" relative w-full h-full overflow-hidden p-0 ">
          <div className="max-w-xl  mb-10">
            <h1 className="text-primary ">Stay top-of-mind with clients</h1>
            <p className="text-xs text-[#919388]">
              Quin helps you strengthen client relationships by recalling key
              personal details and recommending timely, unique gestures.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4 space-y-2 md:space-y-0 *:w-full mt-8">
              <Button size="default" variant="secondary">
                Meet Quin
              </Button>
              <Button size="default" variant="outline">
                Schedule a Demo
              </Button>
            </div>
            <div className="mt-10">
              <img
                src="/Quin main picture.png"
                alt="meeting"
                className="object-cover  rounded-lg block m-0 max-h-[100rem] "
                style={{ marginTop: 0, marginBottom: 0 }} // Remove top margin to ensure no gaps
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
