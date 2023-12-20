import React from "react";
import team1 from "../../assets/Team/team1.jpg";
import team2 from "../../assets/Team/team2.jpg";
import team3 from "../../assets/Team/team3.jpg";
import team4 from "../../assets/Team/team4.jpg";
import team5 from "../../assets/Team/team5.jpg";
import team6 from "../../assets/Team/team6.jpg";
import team7 from "../../assets/Team/team7.jpg";
import team8 from "../../assets/Team/team8.jpg";
import team9 from "../../assets/Team/team9.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom";

function Team() {
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
        </div>
        <div className="flex justify-center ">
          <div className="flex flex-col items-center xl:flex xl:flex-row  xl:items-start  gap-8">
            <Link
              to="/team"
              className="xl:flex  flex flex-col  gap-6 xl:w-1/3 items-center"
            >
              <img src={team1} />
              <div className="flex flex-col  gap-3">
                <h4 className="capitalize  text-center font-semibold tracking-wider">
                  selena
                </h4>
                <p className="text-sm text-center ">Profession</p>
                <div className="flex gap-5  text-primaryColor">
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
              </div>
            </Link>
            <Link
              to="/team"
              className="xl:flex  flex flex-col  gap-6 xl:w-1/3 items-center"
            >
              <img src={team2} className="" />
              <div className="flex flex-col gap-3">
                <h4 className="capitalize  text-center  font-semibold tracking-wider">
                  dua
                </h4>
                <p className="text-sm  text-center ">Profession</p>
                <div className="flex gap-5  text-primaryColor">
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
              </div>
            </Link>
            <Link
              to="/team"
              className="xl:flex flex flex-col  gap-6 xl:w-1/3 items-center"
            >
              <img src={team3} />
              <div className="flex flex-col gap-3">
                <h4 className="capitalize font-semibold tracking-wider  text-center ">
                  ajdar
                </h4>
                <p className="text-sm  text-center ">Profession</p>
                <div className="flex gap-5  text-primaryColor">
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="flex flex-col items-center xl:flex xl:flex-row  xl:items-start  gap-8">
            <Link
              to="/team"
              className="xl:flex flex flex-col gap-6 xl:w-1/3 items-center "
            >
              <img src={team4} />
              <div className="flex flex-col gap-3">
                <h4 className="capitalize font-semibold tracking-wider  text-center ">
                  Username
                </h4>
                <p className="text-sm  text-center ">Profession</p>
                <div className="flex gap-5  text-primaryColor">
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
              </div>
            </Link>
            <Link
              to="/team"
              className="xl:flex flex flex-col  gap-6 xl:w-1/3 items-center"
            >
              <img src={team5} />
              <div className="flex flex-col gap-3">
                <h4 className="capitalize font-semibold tracking-wider  text-center ">
                  Username
                </h4>
                <p className="text-sm  text-center ">Profession</p>
                <div className="flex gap-5  text-primaryColor">
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
              </div>
            </Link>
            <Link
              to="/team"
              className="xl:flex flex flex-col  gap-6 xl:w-1/3 items-center"
            >
              <img src={team6} />
              <div className="flex flex-col gap-3">
                <h4 className="capitalize font-semibold tracking-wider  text-center ">
                  Username
                </h4>
                <p className="text-sm  text-center ">Profession</p>
                <div className="flex gap-5  text-primaryColor">
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="flex flex-col items-center xl:flex xl:flex-row  xl:items-start  gap-8">
            <Link
              to="/team"
              className="xl:flex flex flex-col  gap-6 xl:w-1/3 items-center"
            >
              <img src={team7} />
              <div className="flex flex-col gap-3">
                <h4 className="capitalize font-semibold tracking-wider  text-center ">
                  Username
                </h4>
                <p className="text-sm  text-center ">Profession</p>
                <div className="flex gap-5  text-primaryColor">
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
              </div>
            </Link>
            <Link
              to="/team"
              className="xl:flex flex flex-col  gap-6 xl:w-1/3 items-center"
            >
              <img src={team8} />
              <div className="flex flex-col gap-3">
                <h4 className="capitalize font-semibold tracking-wider  text-center ">
                  Username
                </h4>
                <p className="text-sm  text-center ">Profession</p>
                <div className="flex gap-5  text-primaryColor ">
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
              </div>
            </Link>
            <Link
              to="/team"
              className="xl:flex flex flex-col  gap-6 xl:w-1/3 items-center"
            >
              <img src={team9} />
              <div className="flex flex-col gap-3">
                <h4 className="capitalize font-semibold tracking-wider  text-center ">
                  Username
                </h4>
                <p className="text-sm  text-center ">Profession</p>
                <div className="flex gap-5  text-primaryColor ">
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
