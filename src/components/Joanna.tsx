import { useEffect } from "react";
import quotes from "../assets/quotes.png";
import joannaIMG from "../assets/joannaIMG.png";
import * as AOS from "aos";

const Joanna = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div className="flex flex-col lg:flex-row w-screen  mb-12 lg:my-[5vh]">
      <div className="flex flex-col text-left lg:w-3/5 p-4 lg:pl-12 pt-12">
        <p
          data-aos="fade-down"
          data-aos-duration="1000"
          className="mb-8 font-semibold font-Montserrat"
        >
          POZNAJMY SIĘ
        </p>
        <h1 className=" w-3/4 mb-6 font-bold leading-none ">
          Joanna <br></br> Hostyńska
        </h1>
        <p className="lg:w-3/4  text-left my-8 font-Montserrat">
          HR Manager w firmie tworzącej oprogramowanie dla takich gigantów, jak
          Visa czy Porsche. W ramach zainteresowań skupia się na kwestiach
          związanych z kompetencjami przyszłości, zawodami przyszłości oraz
          zagadnieniami związanymi z AI.
        </p>
        <div className="flex flex-col lg:flex-row pl-12 lg:w-3/4">
          <img className="w-8 lg:h-12 mr-4" src={quotes} alt="" />
          <p className="font-semibold">
            Chętnie pomogę Ci i postaram się doradzić w kwestiach zawodowych,
            które na pierwszą myśl pewnie Cię przerażają, ale zaufaj mi, nie
            jest to takie trudne - bądź dobrej myśli, zapnij pasy i ruszajmy!
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:w-2/5 h-full p-16">
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          src={joannaIMG}
          alt=""
        />
      </div>
    </div>
  );
};

export default Joanna;
