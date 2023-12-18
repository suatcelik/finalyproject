import React from "react";
import { Button } from "react-bootstrap";
import men from "../assets/ShopCards/men.png";
import women from "../assets/ShopCards/women.png";
import accessories from "../assets/ShopCards/accessories.png";
import kids from "../assets/ShopCards/kids.png";

function ShopCards() {
  return (
    <div className=" w-full py-16 flex justify-center  items-center">
      <div className=" w-4/5 h-4/5 flex flex-col gap-8">
        <div className=" h-1/5 flex flex-col items-center gap-3">
          <h2 className="text-textColor xl:text-2xl text-xl font-bold tracking-wider xl:tracking-wider">
            EDITOR'S PICK
          </h2>
          <p className="text-secondText text-center text-sm xl:text-base xl:font-normal font-medium">
            Problems trying to resolve <br className="xl:hidden " /> the
            conflict between
          </p>
        </div>
        <div className="xl:flex xl:flex-row xl:h-4/5 xl:justify-between flex flex-col gap-6">
          <div className="xl:w-[49%]  xl:h-full relative ">
            <div className="absolute xl:top-[82%] xl:left-[8%] z-20 xl:w-[35%] top-[85%] left-[8%] w-[55%] ">
              <Button className="bg-lightText text-textColor h-full w-full text-lg uppercase  tracking-widest rounded-sm">
                MEN
              </Button>
            </div>
            <img className="h-full w-full xl:block hidden" src={men} />
          </div>
          <div className="xl:w-[49%] xl:flex xl:flex-row xl:justify-between flex flex-col gap-6 ">
            <div className="xl:w-[48%] h-full relative ">
              <div className="absolute xl:top-[82%] xl:left-[8%] top-[85%] left-[8%] w-[55%] z-20 xl:w-2/3  ">
                <Button className="bg-lightText text-textColor h-full w-full uppercase text-lg  tracking-widest rounded-sm">
                  women
                </Button>
              </div>
              <img
                className="h-full object-cover xl:block hidden"
                src={women}
              />
            </div>
            <div className="flex xl:w-[48%] h-full flex-col xl:gap-0 gap-6 justify-between">
              <div className="h-[48%]  relative w-full">
                <div className="absolute xl:top-[70%] xl:left-[10%] z-20 xl:w-[70%] top-[70%] left-[8%] w-3/5">
                  <Button className="bg-lightText text-textColor h-full w-full uppercase text-lg tracking-wide xl:tracking-widest rounded-sm">
                    accessories
                  </Button>
                </div>
                <img
                  className="h-full w-full xl:block hidden"
                  src={accessories}
                />
              </div>
              <div className="h-[48%] relative w-full">
                <div className="absolute xl:top-[62%] xl:left-[10%] top-[70%] left-[8%] z-20 xl:w-1/2 w-2/5  ">
                  <Button className="bg-lightText text-textColor h-full w-full uppercase text-lg  tracking-widest rounded-sm">
                    kids
                  </Button>
                </div>
                <img className="h-full w-full xl:block hidden" src={kids} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCards;
