import { Button } from "react-bootstrap";
import Img1 from "../assets/asian-woman-man.png";

const Content = () => {
  return (
    <section id="content">
      <div className="flex h-screen bg-gray-100 justify-center items-center">
        <div className="flex gap-5">
          {" "}
          <img src={Img1} className="h-[705px]" />
        </div>

        <div className="w-1/2 flex flex-col justify-start items-start p-20">
          <div className="text-1xl font-bold text-gray-500">SUMMER 2020</div>
          <div className="text-4xl font-semibold mt-4">
            Part of the Neural Universe
          </div>
          <div className="text-xl text-gray-600 mt-4">
            We know how large objects will act, <br />
            but things on a small scale.
            <br />
          </div>
          <div className="flex mt-6">
            <Button className="border-2 px-6 py-2 mr-4 hover:bg-white hover:text-black transition bg-green-500 rounded">
              BUY NOW
            </Button>
            <Button className="border-2 border-green-500 px-6 py-2 hover:bg-green-500 hover:text-white transition rounded">
              READ MORE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
