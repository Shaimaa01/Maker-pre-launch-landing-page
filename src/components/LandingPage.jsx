import logo from "../assets/imgs/logo.svg";
import scroll from "../assets/icons/icon-scroll.svg";
import squiggle from "../assets/imgs/bg-hero-squiggle.svg";

function Logo() {
  return (
    <div className="bg-midnight h-screen font-manrope  overflow-hidden max-sm:overflow-visible ">
      {/* Logo */}
      <div className="pt-[80px] pl-[165px] pb-[114px] max-lg:pt-[48px] max-lg:pl-[39px] max-sm:pt-[40px] max-sm:pl-0 w-fit max-sm:mx-auto max-sm:pb-[65px]">
        <img src={logo} alt="Logo" />
      </div>

      {/* main content  */}
      <div className="flex justify-between h-full max-sm:hidden  ">
        <div className="bg-hero-left bg-no-repeat w-2/4 mt-12 -ml-14  bg-left-top max-lg:-ml-52 max-xl:-ml-40 max-lg:w-[55%] max-md:w-[64%] max-md:-ml-60"></div>
        <div
          className="max-w-[730px] px-[96px] text-center mx-auto bg-hero-squiggle bg-no-repeat bg-top max-xl:bg-contain max-xl:px-0 max-xl:max-w-[500px] max-lg:max-w-[370px] max-lg:h-[300px] max-lg:mt-[95px] max-md:max-w-[302px]"
          style={{ backgroundImage: `url(${squiggle})` }}
        >
          <h2 className="text-white font-extrabold text-[48px] px-2 leading-[50px] pt-[95px] max-xl:text-[40px] max-lg:text-[32px] max-lg:pt-1 max-md:text-[28px] ">
            Get paid for the work you <span className="text-cyan">love</span> to
            do
          </h2>
          <p className="text-slate font-medium text-[15px] mt-5 pb-[95px]  ">
            The 9-5 grind is so last century. We believe in living life on your
            own terms. Whether you’re looking to escape the rat race or set up a
            side hustle, we’ve got you covered.
          </p>
          <img
            src={scroll}
            alt="scroll icon"
            className="mx-auto -mt-3 max-lg:-mt-16"
          />
        </div>
        <div className="bg-hero-right bg-no-repeat w-2/4  mt-16 -mr-16  bg-right-top max-lg:-mr-56 max-xl:-mr-40 max-lg:w-[55%] max-md:w-[64%] max-md:-mr-64"></div>
      </div>

      {/* for mobile */}
      <div className="sm:hidden">
        {/* imgs */}
        <div className="w-full h-[233px] flex justify-between">
          <div className="bg-hero-left bg-no-repeat bg-contain bg-center w-full  h-full"></div>
          <div className="bg-hero-right bg-no-repeat bg-contain w-full bg-center h-full"></div>
        </div>

        {/* content */}
        <div className="w-[327px] mx-auto text-center">
          <h2 className="text-white font-extrabold text-[32px] px-10 leading-[50px] pt-[48px] ">
            Get paid for the work you <span className="text-cyan">love</span> to
            do
          </h2>
          <p className="text-slate font-medium text-[15px] mt-4  ">
            The 9-5 grind is so last century. We believe in living life on your
            own terms. Whether you’re looking to escape the rat race or set up a
            side hustle, we’ve got you covered.
          </p>
          <img src={scroll} alt="scroll icon" className="mx-auto py-8" />
        </div>
      </div>
    </div>
  );
}

export default Logo;
