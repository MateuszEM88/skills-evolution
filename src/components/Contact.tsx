import React, { useEffect } from "react";
import * as AOS from "aos";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div className="flex w-screen lg:min-h-screen">
      <div className="flex flex-col">
        <div className="p-4 lg:pl-12 flex flex-col lg:w-10/12 text-left">
          <h1 className="w-3/4 mb-8 text-5xl font-bold leading-none pt-12 pl-12">
            Współpraca
          </h1>
          <p className="lg:w-full text-xl text-left my-8 font-Montserrat">
            Jesteś pracownikiem działu HR, placówki edukacyjnej (szkoły,
            uczelnie, biura karier) i poszukujesz wsparcia w zakresie szkoleń?
            Razem możemy stworzyć wartościowe programy edukacyjne (jak na
            przykład spotkania online) dostosowane do potrzeb Twojej
            organizacji.
          </p>
          <div className="flex">
            <div className="flex lg:w-1/2 flex-col">
              <p className="w-3/4 text-xl w-full text-left my-4 font-bold font-Montserrat">
                Z chęcią omówimy, jakie zagadnienia są dla Ciebie istotne!
              </p>
              <p className="w-3/4 text-xl text-left my-4 font-Montserrat">
                Możemy przygotować spotkanie lub szkolenie z zakresu:
              </p>
              <ul className="list-disc pl-8 text-xl font-Montserrat">
                <li>kompetencje i zawody przyszłości</li>
                <li>kariera w IT</li>
                <li>przygotowanie do wejścia na rynek pracy</li>
                <li>przygotowanie do procesu rekrutacji</li>
                <li>budowanie marki osobistej</li>
                <li>wykorzystanie social mediów w rozwoju kariery</li>
              </ul>
              <div
                data-aos="fade-down"
                data-aos-duration="1000"
                className="flex flex-col lg:flex-row items-center justfiy-center p-4 lg:pl-12"
              >
                <p className="w-3/4 text-xl w-full text-left lg:my-4 font-bold font-Montserrat">
                  Kontakt:
                </p>
                <p className="w-full max-lg:text-lg text-xl text-left lg:my-8 font-Montserrat">
                  KONTAKT@SKILLSEVOLUTION.PL
                </p>
              </div>
            </div>
            <div className="flex  items-end"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
