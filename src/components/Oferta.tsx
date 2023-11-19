import { useEffect } from "react";
import ofertaIMG from "../assets/ofertaIMG.jpg";
import * as AOS from "aos";

const Oferta = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div className="Oferta flex flex-col lg:flex-row w-full lg:overflow-y-hidden lg:h-screen mb-12 lg:my-[5vh]">
      <div className="flex flex-col lg:w-3/5 text-left pt-12 p-4 lg:pl-12">
        <p
          data-aos="fade-down"
          data-aos-duration="1000"
          className="mb-8 font-semibold font-Montserrat"
        >
          OFERTA
        </p>
        <h2 className="lg:w-2/3 my-4 font-bold max:leading-10">
          Opracowanie CV
        </h2>
        <h2 className="lg:w-2/3 my-4 font-bold max:leading-10">
          Opracowanie profilu na Linkedin
        </h2>
        <h2 className="w-2/3 my-4 font-bold max-lg:leading-10">
          Przygotowanie do rozmowy kwalifikacyjnej
        </h2>
        <h2 className="lg:w-2/3 my-4 font-bold max-lg:leading-10">
          Budowanie marki osobistej
        </h2>
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          className="flex flex-col items-center max-lg:pb-6 justify-center mt-4"
        >
          <a
            href="mailto: KONTAKT@SKILLSEVOLUTION.PL"
            className=" mt-4 lg:mt-12 font-Montserrat hover:text-underline transition duration-500"
          >
            POZNAJ SZCZEGÓŁY
          </a>
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
