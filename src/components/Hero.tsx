import { useEffect } from "react";
import face from "../assets/face.png";
import heroIMG from "../assets/heroIMG.png";
import * as AOS from "aos";
import { Link } from "react-scroll";

function Hero() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col lg:flex-row w-screen">
      <div className="flex flex-col lg:h-screen w-full lg:w-3/5 items-center justify-start bg-heroBg">
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="flex justify-center items-center my-6 font-Montserrat"
        >
          <Link
            className="max-sm:text-lg text-xl lg:mx-2 lg:tracking-wider cursor-pointer hover:text-underline transition duration-500"
            to="About"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            O NAS
          </Link>
          <p className="text-xl mx-2 tracking-wider font-semibold">|</p>
          <Link
            className="text-xl lg:mx-2 lg:tracking-wider cursor-pointer hover:text-underline transition duration-500"
            to="Oferta"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            OFERTA
          </Link>
          <p className="text-xl mx-2 tracking-wider font-semibold">|</p>
          <Link
            className="text-xl lg:mx-2 lg:tracking-wider cursor-pointer hover:text-underline transition duration-500"
            to="Contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            KONTAKT
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center w-80 h-80 rounded-full bg-white max-lg:mt-6">
          <img className="mb-6" src={face} alt="" />
          <h1 className="text-7xl font-bold leading-8">
            Skills <span className="text-4xl font-bold">evolution</span>
          </h1>
        </div>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="lg:w-2/3 max-lg:p-4 my-4 text-3xl font-bold leading-10"
        >
          Pomożemy Ci zdobyć pracę marzeń i rozwijać się zawodowo.
        </p>
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          className="flex flex-col items-center max-lg:pb-6 justify-center"
        >
          <p className="text-xl mt-4 font-Montserrat">POROZMAWIAJMY</p>
          <span className="h-px w-24 bg-black mt-2 bg-underline"></span>
        </div>
      </div>
      <div className="lg:w-2/5 lg:h-screen lg:overflow-y-hidden">
        <img
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
