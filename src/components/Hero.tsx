import { useEffect } from "react";

import heroIMG from "../assets/heroIMG.png";
import logo from "../assets/logo.png";
import * as AOS from "aos";
import { Link } from "react-scroll";

function Hero() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div className="flex mb-12 flex-col lg:flex-row w-full lg:h-screen ">
      <div className="flex flex-col   w-full lg:w-3/5 items-center justify-between bg-heroBg">
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="flex justify-center items-center my-6 font-Montserrat"
        >
          <Link
            className="max-sm:text-lg lg:mx-2 lg:tracking-wider cursor-pointer hover:text-underline transition duration-500"
            to="About"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            O NAS
          </Link>
          <p className=" mx-2 tracking-wider font-semibold">|</p>
          <Link
            className="max-sm:text-lg lg:mx-2 lg:tracking-wider cursor-pointer hover:text-underline transition duration-500"
            to="Oferta"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            OFERTA
          </Link>
          <p className=" mx-2 tracking-wider font-semibold">|</p>
          <Link
            className="max-sm:text-lg lg:mx-2 lg:tracking-wider cursor-pointer hover:text-underline transition duration-500"
            to="Contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            KONTAKT
          </Link>
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center max-lg:w-1/2 aspect-square lg:w-2/5  max-lg:mt-6">
            <img className="w-full h-full" src={logo} alt="" />
          </div>
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className="lg:w-2/3 max-lg:p-4 my-4  font-bold  lg:leading-snug text-center"
          >
            Pomożemy Ci zdobyć pracę marzeń i rozwijać się zawodowo.
          </h1>
        </div>
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          className="flex flex-col items-center mb-6 max-lg:pb-6 justify-center"
        >
          <p className=" mt-4 font-Montserrat">POROZMAWIAJMY</p>
          <span className="h-px w-24 bg-black my-2 bg-underline"></span>
        </div>
      </div>
      <div className="w-full lg:w-2/5  lg:overflow-y-hidden">
        <img
          className="w-full h-full lg:object-cover"
          data-aos-delay="300"
          data-aos="fade-up"
          data-aos-duration="1000"
          src={heroIMG}
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
