import { Button } from "@material-tailwind/react";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Cta() {
  return (
    <div className="flex flex-col items-center text-center gap-8 xl:gap-4">
      <h2 className="capitalize text-textColor font-bold text-4xl xl:block hidden tracking-wider">
        start your 14 days free trial
      </h2>
      <h2 className="capitalize text-textColor font-bold text-5xl xl:hidden block tracking-normal">
        start your
        <br /> 14 days free trial
      </h2>
      <p className="text-secondText xl:block hidden tracking-wide">
        Met minim Mollie non desert Alamo est sit cliquey dolor <br /> the two
        major do met sent. RELIT official consequent.
      </p>
      <p className="text-secondText xl:hidden block font-semibold tracking-wide">
        Met minim Mollie non desert Alamo est sit
        <br /> cliquey dolor do met sent. RELIT official
        <br /> consequent.
      </p>
      <Button className="xl:w-1/6 font-montserrat font-bold capitalize tracking-wider text-xs px-5 py-4 bg-primaryColor border border-primaryColor text-lightText rounded-md">
        Try it free now
      </Button>
      <div className="flex gap-10 ">
        <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
        <FontAwesomeIcon icon={faFacebook} className="w-8 h-8" />
        <FontAwesomeIcon icon={faTwitter} className="w-8 h-8" />
        <FontAwesomeIcon icon={faLinkedin} className="w-8 h-8" />
      </div>
    </div>
  );
}

export default Cta;
