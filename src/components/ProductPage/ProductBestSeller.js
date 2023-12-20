import React from "react";
import set1 from "../../assets/ProductSet/set1.png";
import set2 from "../../assets/ProductSet/set2.png";
import set3 from "../../assets/ProductSet/set3.png";
import set4 from "../../assets/ProductSet/set4.png";
import set5 from "../../assets/ProductSet/set5.png";
import set6 from "../../assets/ProductSet/set6.png";
import set7 from "../../assets/ProductSet/set7.png";
import set8 from "../../assets/ProductSet/set8.png";

function ProductBestSeller() {
  return (
    <div className="py-12  w-full flex bg-lightGray justify-center">
      <div className="w-4/5 flex flex-col gap-10">
        <h2 className="xl:font-semibold font-bold text-2xl uppercase tracking-wide xl:tracking-wider">
          Bestseller Products
        </h2>
        <div className="w-full h-1 bg-gray-200"></div>
        <div className="flex flex-col gap-14  xl:shadow-none xl:gap-x-0 xl:flex xl:flex-row xl:flex-wrap xl:justify-between xl:gap-y-12 ">
          <div className=" xl:w-[23%] flex flex-col text-center gap-6 bg-lightText pb-10">
            <img className="w-full" src={set1} />
            <div className="flex flex-col gap-6 items-start pl-6 ">
              <h4 className="text-textColor font-bold tracking-wider">
                Graphic Design
              </h4>
              <p className="text-secondText font-medium">English Department</p>
              <div className="flex gap-5 justify-center">
                <span className="text-mutedColor">$16.48</span>
                <span className="text-secondaryColorGreen font-bold">
                  $6.48
                </span>
              </div>
            </div>
          </div>
          <div className=" xl:w-[23%] flex flex-col text-center gap-6 bg-lightText pb-10">
            <img className="w-full" src={set2} />
            <div className="flex flex-col gap-6 items-start pl-6 ">
              <h4 className="text-textColor font-bold tracking-wider">
                Graphic Design
              </h4>
              <p className="text-secondText font-medium">English Department</p>
              <div className="flex gap-5 justify-center">
                <span className="text-mutedColor">$16.48</span>
                <span className="text-secondaryColorGreen font-bold">
                  $6.48
                </span>
              </div>
            </div>
          </div>
          <div className=" xl:w-[23%] flex flex-col text-center gap-6 bg-lightText pb-10">
            <img className="w-full" src={set3} />
            <div className="flex flex-col gap-6 items-start pl-6 ">
              <h4 className="text-textColor font-bold tracking-wider">
                Graphic Design
              </h4>
              <p className="text-secondText font-medium">English Department</p>
              <div className="flex gap-5 justify-center">
                <span className="text-mutedColor">$16.48</span>
                <span className="text-secondaryColorGreen font-bold">
                  $6.48
                </span>
              </div>
            </div>
          </div>
          <div className=" xl:w-[23%] flex flex-col text-center gap-6 bg-lightText pb-10">
            <img className="w-full" src={set4} />
            <div className="flex flex-col gap-6 items-start pl-6 ">
              <h4 className="text-textColor font-bold tracking-wider">
                Graphic Design
              </h4>
              <p className="text-secondText font-medium">English Department</p>
              <div className="flex gap-5 justify-center">
                <span className="text-mutedColor">$16.48</span>
                <span className="text-secondaryColorGreen font-bold">
                  $6.48
                </span>
              </div>
            </div>
          </div>
          <div className=" xl:w-[23%] flex flex-col text-center gap-6 bg-lightText pb-10">
            <img className="w-full" src={set5} />
            <div className="flex flex-col gap-6 items-start pl-6 ">
              <h4 className="text-textColor font-bold tracking-wider">
                Graphic Design
              </h4>
              <p className="text-secondText font-medium">English Department</p>
              <div className="flex gap-5 justify-center">
                <span className="text-mutedColor">$16.48</span>
                <span className="text-secondaryColorGreen font-bold">
                  $6.48
                </span>
              </div>
            </div>
          </div>
          <div className=" xl:w-[23%] flex flex-col text-center gap-6 bg-lightText pb-10">
            <img className="w-full" src={set6} />
            <div className="flex flex-col gap-6 items-start pl-6 ">
              <h4 className="text-textColor font-bold tracking-wider">
                Graphic Design
              </h4>
              <p className="text-secondText font-medium">English Department</p>
              <div className="flex gap-5 justify-center">
                <span className="text-mutedColor">$16.48</span>
                <span className="text-secondaryColorGreen font-bold">
                  $6.48
                </span>
              </div>
            </div>
          </div>
          <div className=" xl:w-[23%] flex flex-col text-center gap-6 bg-lightText pb-10">
            <img className="w-full" src={set7} />
            <div className="flex flex-col gap-6 items-start pl-6 ">
              <h4 className="text-textColor font-bold tracking-wider">
                Graphic Design
              </h4>
              <p className="text-secondText font-medium">English Department</p>
              <div className="flex gap-5 justify-center">
                <span className="text-mutedColor">$16.48</span>
                <span className="text-secondaryColorGreen font-bold">
                  $6.48
                </span>
              </div>
            </div>
          </div>
          <div className=" xl:w-[23%] flex flex-col text-center gap-6 bg-lightText pb-10">
            <img className="w-full" src={set8} />
            <div className="flex flex-col gap-6 items-start pl-6 ">
              <h4 className="text-textColor font-bold tracking-wider">
                Graphic Design
              </h4>
              <p className="text-secondText font-medium">English Department</p>
              <div className="flex gap-5 justify-center">
                <span className="text-mutedColor">$16.48</span>
                <span className="text-secondaryColorGreen font-bold">
                  $6.48
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductBestSeller;
