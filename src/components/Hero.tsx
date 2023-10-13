import { useEffect } from "react";
import face from "../assets/face.png";
import heroIMG from "../assets/heroIMG.png";
import * as AOS from "aos";

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
          <p className="text-xl mx-2 tracking-wider">O NAS</p>
          <p className="text-xl mx-2 tracking-wider font-semibold">|</p>
          <p className="text-xl mx-2 tracking-wider">OFERTA</p>
          <p className="text-xl mx-2 tracking-wider font-semibold">|</p>
          <p className="text-xl mx-2 tracking-wider">KONTAKT</p>
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
          className="w-2/3 my-4 text-3xl font-bold leading-10"
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
