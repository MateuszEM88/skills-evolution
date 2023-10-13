import { useEffect } from "react";
import justynaIMG from "../assets/justynaIMG.png";
import quotes from "../assets/quotes.png";
import * as AOS from "aos";

const Justyna = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div className="flex flex-col lg:flex-row w-screen min-h-screen mb-12">
      <div className="flex flex-col lg:w-2/5 h-full p-16">
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          src={justynaIMG}
          alt=""
        />
      </div>
      <div className="flex flex-col text-left lg:w-3/5 p-4 lg:pl-12 pt-12">
        <h1 className="w-3/4 mb-6 text-5xl font-bold leading-none ">
          Justyna Kot
        </h1>
        <p className="lg:w-3/4 text-xl text-left my-8 font-Montserrat">
          Head of Marketing w międzynarodowym startupie, geek, pasjonatka nowych
          technologii, kosmosu i Lego. Marketer z ponad 10-letnim
          doświadczeniem. Od 8 lat działa w sektorze IT i nowych technologii,
          doradzając startupom i firmom informatycznym. W latach 2017-2022
          pełniła rolę Marketing Mentora w programie Google for Startups
          Accelerator. Obecnie razem z Joanną rozwija projekt Skills Evolution.
        </p>
        <div className="flex flex-col lg:flex-row pl-12 lg:w-3/4 text-xl">
          <img className="w-8 lg:h-12 mr-4" src={quotes} alt="" />
          <p className="font-semibold">
            Mamy szczęście żyć w XXI wieku - epoce, która ułatwia nam realizację
            nawet tych najbardziej śmiałych marzeń. Wokół nas jest mnóstwo
            nieograniczonej wiedzy i możliwości - trzeba jedynie się odważyć, by
            po nie sięgnąć.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Justyna;
