import { useEffect } from "react";
import * as AOS from "aos";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div className="Contact mb-12 flex w-screen ">
      <div className="flex flex-col">
        <div className=" lg:pl-12 flex flex-col lg:w-10/12 text-left">
          <h1 className="w-3/4 mb-8  font-bold leading-none pt-12 max-lg:p-4 ">
            Współpraca
          </h1>
          <p className="lg:w-full  text-left my-4 lg:my-8 font-Montserrat max-lg:p-4">
            Jesteś pracownikiem działu HR, placówki edukacyjnej (szkoły,
            uczelnie, biura karier) i poszukujesz wsparcia w zakresie szkoleń?
            Razem możemy stworzyć wartościowe programy edukacyjne (jak na
            przykład spotkania online) dostosowane do potrzeb Twojej
            organizacji.
          </p>
          <div className="flex">
            <div className="flex lg:w-1/2 flex-col">
              <p className="lg:w-3/4  w-full text-left my-4 font-bold font-Montserrat max-lg:p-4">
                Z chęcią omówimy, jakie zagadnienia są dla Ciebie istotne!
              </p>
              <p className="lg:w-3/4  text-left my-4 max-lg:p-4 font-Montserrat">
                Możemy przygotować spotkanie lub szkolenie z zakresu:
              </p>
              <ul className="list-disc p-6 lg:pl-8 font-Montserrat">
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
                className="flex flex-col lg:flex-row items-center justfiy-center p-4 "
              >
                <p className="w-3/4 w-full text-left lg:my-4 font-bold font-Montserrat">
                  Kontakt:
                </p>
                <a
                  href="mailto: KONTAKT@SKILLSEVOLUTION.PL"
                  className="w-full max-sm:text-sm max-lg:text-lg  text-left lg:my-8 font-Montserrat underline"
                >
                  KONTAKT@SKILLSEVOLUTION.PL
                </a>
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
