import { useEffect } from "react";
import aboutIMG from "../assets/aboutIMG.jpg";
import * as AOS from "aos";

function About() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div className="About mb-12 flex flex-col lg:flex-row w-screen lg:max-h-screen lg:my-[5vh]">
      <div className="flex flex-col lg:w-2/5 h-full justify-around text-left p-4 lg:pt-12 lg:pl-12">
        <p
          data-aos="fade-down"
          data-aos-duration="1000"
          className="lg:mb-8 font-semibold font-Montserrat"
        >
          O NAS
        </p>
        <div className="w-full h-full flex items-center justify-center">
          <img
            data-aos="fade-up"
            data-aos-duration="1000"
            className="w-2/3 object-contain max-lg:hidden"
            src={aboutIMG}
            alt=""
          />
        </div>{" "}
      </div>
      <div className="flex flex-col items-center justify-start lg:pt-12 lg:w-3/5">
        <h1 className="lg:w-2/3 mb-8  font-bold leading-none text-left max-lg:p-4">
          Wierzymy, że każdy ma w sobie potencjał, który czeka na odkrycie.
        </h1>
        <p className="lg:w-2/3 max-lg:p-4  text-left my-8 font-Montserrat">
          Chcesz zmienić coś w swoim zawodowym życiu, ale nie wiesz od czego
          zacząć? Dobrze trafiłeś!
        </p>
        <p className="lg:w-2/3  font-bold text-left my-4 font-Montserrat">
          Skupiamy się na:
        </p>
        <div className="flex flex-col lg:w-2/3  font-Montserrat max-lg:p-4 text-left">
          <div className="flex">
            <p className="mx-2">✓</p>
            <p>
              Indywidualnym doradztwie zawodowym, które jest dostosowane do
              Twoich celów
            </p>
          </div>
          <div className="flex ">
            <p className="mx-2">✓</p>
            <p>Analizie CV oraz pomocy w jego stworzeniu</p>
          </div>
          <div className="flex">
            <p className="mx-2">✓</p>
            <p>Przygotowaniu do skutecznej rozmowy kwalifikacyjnej</p>
          </div>
          <div className="flex">
            <p className="mx-2">✓</p>
            <p>Wsparciu w optymalizacji profilu na LinkedIn</p>
          </div>
          <div className="flex">
            <p className="mx-2">✓</p>
            <p>Wsparciu w budowaniu marki osobistej</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
