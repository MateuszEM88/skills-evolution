const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row w-screen justify-around items-center bg-heroBg mt-16 lg:text-xl">
      <div className="flex justify-center items-center my-12 font-Montserrat">
        <p className="mx-2 tracking-wider">FACEBOOK</p>
        <p className=" mx-2 tracking-wider font-semibold">|</p>
        <p className=" mx-2 tracking-wider">INSTAGRAM</p>
        <p className="mx-2 tracking-wider font-semibold">|</p>
        <p className=" mx-2 tracking-wider">LINKEDIN</p>
      </div>
      <p className="text-xl mx-2 tracking-wider font-Montserrat">
        POLITYKA PRYWATNOŚCI
      </p>
    </div>
  );
};

export default Footer;
