const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full justify-around items-center bg-heroBg mt-4 lg:text-xl">
      <div className="flex justify-center items-center my-8 lg:my-12 font-Montserrat">
        <a
          href="https://www.facebook.com/your.skills.evolution"
          className="lg:mx-2 lg:tracking-wider cursor-pointer hover:text-underline transition duration-500"
        >
          FACEBOOK
        </a>
        <p className=" mx-2 lg:tracking-wider font-semibold ">|</p>
        <a
          href="https://www.instagram.com/your.skills.evolution/"
          className=" lg:mx-2 lg:tracking-wider cursor-pointer hover:text-underline transition duration-500"
        >
          INSTAGRAM
        </a>
        <p className="mx-2 lg:tracking-wider font-semibold">|</p>
        <p className=" lg:mx-2 lg:tracking-wider text-gray-400">LINKEDIN</p>
      </div>
      <p className=" mx-2 tracking-wider font-Montserrat max-lg:pb-4 text-gray-400">
        POLITYKA PRYWATNOŚCI
      </p>
    </div>
  );
};

export default Footer;
