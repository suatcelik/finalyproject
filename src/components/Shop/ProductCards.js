import { Button, Option, Select } from "@material-tailwind/react";
import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import { VscChecklist } from "react-icons/vsc";

import photo1 from "../../assets/productcards/photo1.png";
import photo2 from "../../assets/productcards/photo2.png";
import photo3 from "../../assets/productcards/photo3.png";
import photo4 from "../../assets/productcards/photo4.png";
import photo5 from "../../assets/productcards/photo5.png";
import photo6 from "../../assets/productcards/photo6.png";
import photo7 from "../../assets/productcards/photo7.png";
import photo8 from "../../assets/productcards/photo8.png";
import photo9 from "../../assets/productcards/photo9.png";
import photo10 from "../../assets/productcards/photo10.png";
import photo11 from "../../assets/productcards/photo11.png";
import photo12 from "../../assets/productcards/photo12.png";

import { Link } from "react-router-dom";

function ProductsCards() {
  return (
    <div className="flex justify-center items-center  pt-8 ">
      <div className="flex flex-col w-full items-center gap-12">
        <div className="w-11/12 flex flex-col gap-10 items-center  xl:flex xl:flex-row xl:justify-between xl:items-center">
          <h2 className=" text-secondText text-base font-medium">
            Showing all 12 results
          </h2>
          <div className="flex items-center gap-7  font-semibold text-lg p-2">
            <h3 className="text-secondText">Views :</h3>
            <BsFillGridFill className="h-5 w-5 text-textColor" />
            <VscChecklist className="h-5 w-5 text-secondText" />
          </div>
          <div className="flex gap-2 items-center">
            <Select label="Sort By" size="lg">
              <Option>Popularity</Option>
              <Option>Newest</Option>
              <Option>Price Low-High</Option>
              <Option>Price High-Low</Option>
            </Select>
            <div>
              <Button
                size="lg"
                className="capitalize tracking-wider bg-primaryColor text-lightText "
              >
                Filter
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-16 xl:gap-0 xl:flex xl:flex-row w-11/12 xl:flex-wrap xl:justify-between xl:gap-y-12">
          <div className=" xl:w-[23%] flex flex-col text-center xl:gap-6 gap-8 ">
            <Link to="/shop/product">
              <img className="w-full" src={photo1} alt="Product 1" />
            </Link>
            <h4 className="text-textColor font-bold tracking-wider">
              Graphic Design
            </h4>
            <p className="text-secondText font-medium">English Department</p>
            <div className="flex gap-3 xl:gap-5 justify-center">
              <span className="text-mutedColor">$16.48</span>
              <span className="text-secondaryColorGreen font-bold">$6.48</span>
            </div>
            <div className="flex gap-2 justify-center">
              <button className="h-5 w-5 bg-primaryColor rounded-full"></button>
              <button className="h-5 w-5 bg-secondaryColorGreen rounded-full"></button>
              <button className="h-5 w-5 bg-alertColor rounded-full"></button>
              <button className="h-5 w-5 bg-darkBg rounded-full"></button>
            </div>
          </div>
          <div className=" xl:w-[23%] flex flex-col text-center xl:gap-6 gap-8 ">
            <Link to="/shop/product">
              <img className="w-full" src={photo2} />
            </Link>
            <h4 className="text-textColor font-bold tracking-wider">
              Graphic Design
            </h4>
            <p className="text-secondText font-medium">English Department</p>
            <div className="flex gap-3 xl:gap-5 justify-center">
              <span className="text-mutedColor">$16.48</span>
              <span className="text-secondaryColorGreen font-bold">$6.48</span>
            </div>
            <div className="flex gap-2 justify-center">
              <button className="h-5 w-5 bg-primaryColor rounded-full"></button>
              <button className="h-5 w-5 bg-secondaryColorGreen rounded-full"></button>
              <button className="h-5 w-5 bg-alertColor rounded-full"></button>
              <button className="h-5 w-5 bg-darkBg rounded-full"></button>
            </div>
          </div>
          <div className=" xl:w-[23%] flex flex-col text-center gap-8 xl:gap-6">
            <Link to="/shop/product">
              <img className="w-full" src={photo3} />
            </Link>
            <h4 className="text-textColor font-bold tracking-wider">
              Graphic Design
            </h4>
            <p className="text-secondText font-medium">English Department</p>
            <div className="flex gap-3 xl:gap-5 justify-center">
              <span className="text-mutedColor">$16.48</span>
              <span className="text-secondaryColorGreen font-bold">$6.48</span>
            </div>
            <div className="flex gap-2 justify-center">
              <button className="h-5 w-5 bg-primaryColor rounded-full"></button>
              <button className="h-5 w-5 bg-secondaryColorGreen rounded-full"></button>
              <button className="h-5 w-5 bg-alertColor rounded-full"></button>
              <button className="h-5 w-5 bg-darkBg rounded-full"></button>
            </div>
          </div>
          <div className=" xl:w-[23%] flex flex-col text-center gap-8 xl:gap-6">
            <Link to="/shop/product">
              <img className="w-full" src={photo4} />
            </Link>
            <h4 className="text-textColor font-bold tracking-wider">
              Graphic Design
            </h4>
            <p className="text-secondText font-medium">English Department</p>
            <div className="flex gap-3 xl:gap-5 justify-center">
              <span className="text-mutedColor">$16.48</span>
              <span className="text-secondaryColorGreen font-bold">$6.48</span>
            </div>
            <div className="flex gap-2 justify-center">
              <button className="h-5 w-5 bg-primaryColor rounded-full"></button>
              <button className="h-5 w-5 bg-secondaryColorGreen rounded-full"></button>
              <button className="h-5 w-5 bg-alertColor rounded-full"></button>
              <button className="h-5 w-5 bg-darkBg rounded-full"></button>
            </div>
          </div>
          <div className=" xl:w-[23%] flex flex-col text-center gap-8 xl:gap-6">
            <Link to="/shop/product">
              <img className="w-full" src={photo5} />
            </Link>
            <h4 className="text-textColor font-bold tracking-wider">
              Graphic Design
            </h4>
            <p className="text-secondText font-medium">English Department</p>
            <div className="flex gap-3 xl:gap-5 justify-center">
              <span className="text-mutedColor">$16.48</span>
              <span className="text-secondaryColorGreen font-bold">$6.48</span>
            </div>
            <div className="flex gap-2 justify-center">
              <button className="h-5 w-5 bg-primaryColor rounded-full"></button>
              <button className="h-5 w-5 bg-secondaryColorGreen rounded-full"></button>
              <button className="h-5 w-5 bg-alertColor rounded-full"></button>
              <button className="h-5 w-5 bg-darkBg rounded-full"></button>
            </div>
          </div>
          <div className=" xl:w-[23%] flex flex-col text-center gap-8 xl:gap-6">
            <Link to="/shop/product">
              <img className="w-full" src={photo6} />
            </Link>
            <h4 className="text-textColor font-bold tracking-wider">
              Graphic Design
            </h4>
            <p className="text-secondText font-medium">English Department</p>
            <div className="flex gap-3 xl:gap-5 justify-center">
              <span className="text-mutedColor">$16.48</span>
              <span className="text-secondaryColorGreen font-bold">$6.48</span>
            </div>
            <div className="flex gap-2 justify-center">
              <button className="h-5 w-5 bg-primaryColor rounded-full"></button>
              <button className="h-5 w-5 bg-secondaryColorGreen rounded-full"></button>
              <button className="h-5 w-5 bg-alertColor rounded-full"></button>
              <button className="h-5 w-5 bg-darkBg rounded-full"></button>
            </div>
          </div>
          <div className=" xl:w-[23%] flex flex-col text-center gap-8 xl:gap-6">
            <Link to="/shop/product">
              <img className="w-full" src={photo7} />
            </Link>
            <h4 className="text-textColor font-bold tracking-wider">
              Graphic Design
            </h4>
            <p className="text-secondText font-medium">English Department</p>
            <div className="flex gap-3 xl:gap-5 justify-center">
              <span className="text-mutedColor">$16.48</span>
              <span className="text-secondaryColorGreen font-bold">$6.48</span>
            </div>
            <div className="flex gap-2 justify-center">
              <button className="h-5 w-5 bg-primaryColor rounded-full"></button>
              <button className="h-5 w-5 bg-secondaryColorGreen rounded-full"></button>
              <button className="h-5 w-5 bg-alertColor rounded-full"></button>
              <button className="h-5 w-5 bg-darkBg rounded-full"></button>
            </div>
          </div>
          <div className=" xl:w-[23%] flex flex-col text-center gap-8 xl:gap-6">
            <Link to="/shop/product">
              <img className="w-full" src={photo8} />
            </Link>
            <h4 className="text-textColor font-bold tracking-wider">
              Graphic Design
            </h4>
            <p className="text-secondText font-medium">English Department</p>
            <div className="flex gap-3 xl:gap-5 justify-center">
              <span className="text-mutedColor">$16.48</span>
              <span className="text-secondaryColorGreen font-bold">$6.48</span>
            </div>
            <div className="flex gap-2 justify-center">
              <button className="h-5 w-5 bg-primaryColor rounded-full"></button>
              <button className="h-5 w-5 bg-secondaryColorGreen rounded-full"></button>
              <button className="h-5 w-5 bg-alertColor rounded-full"></button>
              <button className="h-5 w-5 bg-darkBg rounded-full"></button>
            </div>
          </div>
          <div className=" xl:w-[23%] flex flex-col text-center gap-8 xl:gap-6">
            <Link to="/shop/product">
              <img className="w-full" src={photo9} />
            </Link>
            <h4 className="text-textColor font-bold tracking-wider">
              Graphic Design
            </h4>
            <p className="text-secondText font-medium">English Department</p>
            <div className="flex gap-3 xl:gap-5 justify-center">
              <span className="text-mutedColor">$16.48</span>
              <span className="text-secondaryColorGreen font-bold">$6.48</span>
            </div>
            <div className="flex gap-2 justify-center">
              <button className="h-5 w-5 bg-primaryColor rounded-full"></button>
              <button className="h-5 w-5 bg-secondaryColorGreen rounded-full"></button>
              <button className="h-5 w-5 bg-alertColor rounded-full"></button>
              <button className="h-5 w-5 bg-darkBg rounded-full"></button>
            </div>
          </div>
          <div className=" xl:w-[23%] flex flex-col text-center gap-8 xl:gap-6">
            <Link to="/shop/product">
              <img className="w-full" src={photo10} />
            </Link>
            <h4 className="text-textColor font-bold tracking-wider">
              Graphic Design
            </h4>
            <p className="text-secondText font-medium">English Department</p>
            <div className="flex gap-3 xl:gap-5 justify-center">
              <span className="text-mutedColor">$16.48</span>
              <span className="text-secondaryColorGreen font-bold">$6.48</span>
            </div>
            <div className="flex gap-2 justify-center">
              <button className="h-5 w-5 bg-primaryColor rounded-full"></button>
              <button className="h-5 w-5 bg-secondaryColorGreen rounded-full"></button>
              <button className="h-5 w-5 bg-alertColor rounded-full"></button>
              <button className="h-5 w-5 bg-darkBg rounded-full"></button>
            </div>
          </div>
          <div className=" xl:w-[23%] flex flex-col text-center gap-8 xl:gap-6">
            <Link to="/shop/product">
              <img className="w-full" src={photo11} />
            </Link>
            <h4 className="text-textColor font-bold tracking-wider">
              Graphic Design
            </h4>
            <p className="text-secondText font-medium">English Department</p>
            <div className="flex gap-3 xl:gap-5 justify-center">
              <span className="text-mutedColor">$16.48</span>
              <span className="text-secondaryColorGreen font-bold">$6.48</span>
            </div>
            <div className="flex gap-2 justify-center">
              <button className="h-5 w-5 bg-primaryColor rounded-full"></button>
              <button className="h-5 w-5 bg-secondaryColorGreen rounded-full"></button>
              <button className="h-5 w-5 bg-alertColor rounded-full"></button>
              <button className="h-5 w-5 bg-darkBg rounded-full"></button>
            </div>
          </div>
          <div className=" xl:w-[23%] flex flex-col text-center gap-8 xl:gap-6">
            <Link to="/shop/product">
              <img className="w-full" src={photo12} />
            </Link>
            <h4 className="text-textColor font-bold tracking-wider">
              Graphic Design
            </h4>
            <p className="text-secondText font-medium">English Department</p>
            <div className="flex gap-3 xl:gap-5 justify-center">
              <span className="text-mutedColor">$16.48</span>
              <span className="text-secondaryColorGreen font-bold">$6.48</span>
            </div>
            <div className="flex gap-2 justify-center">
              <button className="h-5 w-5 bg-primaryColor rounded-full"></button>
              <button className="h-5 w-5 bg-secondaryColorGreen rounded-full"></button>
              <button className="h-5 w-5 bg-alertColor rounded-full"></button>
              <button className="h-5 w-5 bg-darkBg rounded-full"></button>
            </div>
          </div>
        </div>
        <div className=" bg-white border border-zinc rounded-md mt-8">
          <button className="text-sm border border-zinc bg-zinc100 py-6 px-6 text-mutedColor hover:cursor-pointer rounded-l-md ">
            First
          </button>
          <button className="text-sm border border-zinc text-primaryColor py-6 px-6  hover:cursor-pointer  ">
            1
          </button>
          <button className="text-sm border border-zinc py-6 px-6 text-lightText bg-primaryColor hover:cursor-pointer  ">
            2
          </button>
          <button className="text-sm border border-zinc py-6 px-6 text-primaryColor hover:cursor-pointer  ">
            3
          </button>
          <button className="text-sm border border-zinc py-6 px-6 text-primaryColor hover:cursor-pointer rounded-r-md ">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductsCards;
