import React from "react";
import { Button } from "./ui/button";
import DailyReportLogo from "./DailyReportLogo";
import { BrowserCardWithSelector } from "./BrowserCardWithSelector";
export const DailyReport: React.FC = () => {
  return (
    // <BrowserCardWithSelector />
    <div className="flex flex-col items-center justify-start min-h-screen w-full  max-w-none prose md:prose-xl  ">
      <DailyReportLogo className="fill-[#282E3A]" />
      <div className=" flex flex-col-reverse md:flex-row mt-12  md:*:mt-14 mx-10 max-w-5xl ">
        <div className=" relative w-full   p-0 ">
          <div className="max-w-xl  mb-10 text-center">
            <h1 className="text-foreground text-5xl md:text-6xl font-serif   ">
              Everything about design, in just 🖐️ minutes
            </h1>
            <p className="text-xs text-[#A5A5AF]">
              Quin helps you strengthen client relationships by recalling key
              personal details and recommending timely, unique gestures.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4 space-y-2 md:space-y-0 *:w-full md:*:w-auto   mt-8">
              <Button size="default" variant="default">
                <span className="font-bold">Add to Chrome,</span>
                <span className="ml-1">it&#39;s Free</span>
              </Button>
              <Button size="default" variant="outline">
                Use on Web
              </Button>
            </div>
            <div className="mt-5  flex items-center justify-center w-full ">
              <BrowserCardWithSelector />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
