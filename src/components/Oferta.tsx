import { useEffect } from "react";
import ofertaIMG from "../assets/ofertaIMG.png";
import * as AOS from "aos";

const Oferta = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div className="Oferta flex flex-col lg:flex-row w-screen min-h-screen lg:overflow-y-hidden mb-12">
      <div className="flex flex-col lg:w-3/5 text-left pt-12 p-4 lg:pl-12">
        <p
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-xl mb-8 font-semibold font-Montserrat"
        >
          OFERTA
        </p>
        <p className="lg:w-2/3 my-4 text-4xl font-bold leading-10">
          Opracowanie CV
        </p>
        <p className="lg:w-2/3 my-4 text-4xl font-bold leading-10">
          Opracowanie profilu na Linkedin
        </p>
        <p className="w-2/3 my-4 text-4xl font-bold leading-10">
          Przygotowanie do rozmowy kwalifikacyjnej
        </p>
        <p className="lg:w-2/3 my-4 text-4xl font-bold leading-10">
          Budowanie marki osobistej
        </p>
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          className="flex flex-col items-center max-lg:pb-6 justify-center"
        >
          <p className="text-xl mt-4 font-Montserrat">POZNAJ SZCZEGÓŁY</p>
          <span className="h-px w-24 bg-black mt-2 bg-underline"></span>
        </div>
      </div>
      <div className="flex flex-col lg:w-2/5 h-full ">
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full"
          src={ofertaIMG}
          alt=""
        />
      </div>
    </div>
  );
};

export default Oferta;
