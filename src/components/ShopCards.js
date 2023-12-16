import React from "react";
import { Button } from "react-bootstrap";

function ShopCards() {
  return (
    <div className="container bg-white ">
      <h1 className="text-2xl font-bold text-gray-800 text-center">
        EDITOR'S PICK
      </h1>
      <p className="text-sm text-gray-500 ">
        Problems trying to resolve the conflict between
      </p>
      <div className="flex justify-center">
        <div className=" relative ">
          <img
            src="img/men.png"
            className="w-[510px] h-[500px] object-cover object-center  "
          />
          <Button
            className="absolute bottom-4 left-4 bg-black text-white px-4 py-2"
            rounded
          >
            MEN
          </Button>
        </div>
        <div className=" relative">
          <img
            src="img/women.png"
            className="w-[240px] h-[500px] object-cover object-center"
          />
          <Button
            className="absolute bottom-4 left-4 bg-black text-white px-4 py-2"
            rounded
          >
            WOMEN
          </Button>
        </div>
        <div>
          <div className=" relative mb-4 ">
            <img
              src="img/accessories.png"
              className="w-[240px] h-[242px] object-cover object-center "
            />
            <Button
              className="absolute bottom-4 left-4 bg-black text-white px-4 py-2"
              rounded
            >
              ACCESSORIES
            </Button>
          </div>
          <div className=" relative mb-4">
            <img
              src="img/kids.png"
              className="w-[240px] h-[242px] object-cover object-center "
            />
            <Button
              className="absolute bottom-4 left-4 bg-black text-white px-4 py-2"
              rounded
            >
              KIDS
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCards;
