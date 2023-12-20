import React from "react";
import team1 from "../../assets/Team/team1.jpg";
import team2 from "../../assets/Team/team2.jpg";
import team3 from "../../assets/Team/team3.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function TeamSection() {
  return (
    <div className=" py-24 flex justify-center">
      <div className="w-4/5  flex flex-col gap-20">
        <div className="flex flex-col items-center text-center gap-8 xl:gap-4">
          <h2 className="capitalize text-textColor font-bold text-4xl xl:block hidden tracking-wider">
            meet our team
          </h2>
          <h2 className="capitalize text-textColor font-bold text-5xl xl:hidden block tracking-normal">
            meet our
            <br /> team
          </h2>
          <p className="text-secondText xl:block hidden tracking-wide">
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics{" "}
          </p>
          <p className="text-secondText xl:hidden block font-semibold tracking-wide">
            Problems trying to resolve
            <br /> the conflict between the two major
            <br /> realms of Classical physics:
            <br /> Newtonian mechanics
          </p>
        </div>
        <div className="flex justify-center ">
          <div className="flex flex-col items-center xl:flex xl:flex-row  xl:items-start  gap-8">
            <div className="xl:flex  flex flex-col  gap-6 xl:w-1/3 items-center">
              <img src={team1} />
              <div className="flex flex-col  gap-3">
                <h4 className="capitalize  text-center font-semibold tracking-wider">
                  selena
                </h4>
                <p className="text-sm xl:text-start text-center ">profession</p>
                <div className="flex gap-3 ">
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
              </div>
            </div>
            <div className="xl:flex  flex flex-col  gap-6 xl:w-1/3 items-center">
              <img src={team2} className="" />
              <div className="flex flex-col gap-3">
                <h4 className="capitalize  text-center  font-semibold tracking-wider">
                  dua
                </h4>
                <p className="text-sm xl:text-start text-center ">profession</p>
                <div className="flex gap-3 ">
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
              </div>
            </div>
            <div className="xl:flex flex flex-col  gap-6 xl:w-1/3 items-center">
              <img src={team3} />
              <div className="flex flex-col gap-3">
                <h4 className="capitalize font-semibold tracking-wider  text-center ">
                  ajdar
                </h4>
                <p className="text-sm xl:text-start text-center ">profession</p>
                <div className="flex gap-3 ">
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
