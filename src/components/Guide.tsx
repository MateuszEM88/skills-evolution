import { useEffect } from "react";
import tablet1 from "../assets/tablet1.png";
import tablet2 from "../assets/tablet2.png";
import * as AOS from "aos";

const Guide = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div className="flex flex-col lg:flex-row w-screen lg:h-screen">
      <div className="lg:h-screen lg:w-1/2 bg-heroBg text-left">
        <h1 className="lg:w-3/4 mb-8 text-5xl font-bold leading-none pt-12 pl-2 lg:pl-12">
          Pobierz darmowe poradniki!
        </h1>
        <p className="lg:w-3/4 text-xl text-left my-8 font-Montserrat pl-4 lg:pl-12">
          Zapisz się do naszego newslettera i otrzymaj dostęp do ekskluzywnych
          poradników i cennych wskazówek, które pomogą Ci osiągnąć swoje cele
          zawodowe. W zamian za Twój adres e-mail, otrzymasz nieocenioną wiedzę
          i inspiracje, które wspierają Twoją ścieżkę rozwoju zawodowego.
        </p>
        <p className="lg:w-3/4 text-xl text-left my-8 font-bold font-Montserrat p-4 lg:pl-12">
          Dołącz już teraz i zainwestuj w swoją przyszłość zawodową!
        </p>
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          className="flex flex-col items-center max-lg:pb-4 justify-center"
        >
          <p className="text-xl mt-4 font-Montserrat">ZAPISZ SIĘ I POBIERZ</p>
          <span className="h-px w-24 bg-black mt-2 bg-underline"></span>
        </div>
      </div>
      <div className="flex lg:h-screen lg:w-1/2 max-lg:pt-6">
        <div className="flex justify-center items-end pb-12 w-1/2">
          <img
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-offset="-200"
            className="object-contain w-3/4"
            src={tablet2}
            alt=""
          />
        </div>
        <div className="flex justify-center items-start pt-12 w-1/2">
          <img
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-offset="400"
            className="object-contain w-3/4"
            src={tablet1}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Guide;
