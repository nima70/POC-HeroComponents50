import React from "react";
import { Button } from "@/components/ui/button";
// import Phone from "@/assets/phone.png";

export const FinTrack: React.FC = () => {
  return (
    // <div className=" flex flex-col items-center justify-start min-h-screen w-full  prose prose-xl max-w-none  ">
    <div className="flex flex-col items-center justify-start min-h-screen w-full prose lg:prose-xl max-w-none bg-[#F3F7FA]">
      <div className=" flex flex-col-reverse md:flex-row  *:mt-20 mx-10 max-w-5xl ">
        <div className=" relative w-full h-full overflow-hidden p-0 ">
          <img
            src={`${process.env.PUBLIC_URL}/phone.png`}
            alt="Phone"
            className="object-cover  rounded-lg block m-0 max-h-[100rem]"
            style={{ marginTop: 0, marginBottom: 0 }} // Remove top margin to ensure no gaps
          />
        </div>
        <div className="text-center md:text-left   ">
          <div className="space-y-5 md:mt-6">
            <div className="text-primary text-xs mb-6 ">
              #1 online transaction platform
            </div>
            <h1 className="text-5xl bg-gradient-to-r md:text-6xl from-black to-black/60 bg-clip-text text-transparent">
              Solutions for financial life
            </h1>
            <div className="text-sm">
              Use and re-use tons of responsive sections too a main create the
              perfect layout. Sections are firmly of organised into the perfect
              starting categories.
            </div>
            <Button size="lg">Get 14 Days Free Trial →</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
