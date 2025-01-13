import paid from "../assets/icons/icon-paid.svg";
import free from "../assets/icons/icon-free.svg";

function Pricing() {
  return (
    <div className="font-manrope bg-midnight text-center max-lg:pt-1 max-lg:px-[24px]">
      <h2 className="font-bold text-white  text-[32px]">Our pricing plans</h2>
      <p className="max-w-[540px] mx-auto text-slate  font-[15px] pt-8">
        We only make money when our creators make money. Our plans are always
        affordable, and it’s completely free to get started.
      </p>

      {/* content */}
      <div className="flex py-[100px] text-left justify-center items-center gap-6 max-lg:flex-col max-lg:gap-16 max-lg:pt-[80px] ">
        {/* box 1 */}
        <div className="max-w-[445px] bg-navy rounded-lg py-[45px] px-[38px]  relative text-white font-thin ">
          <img src={free} className=" absolute -top-6" />
          <h3 className="font-bold text-[18px] ">Dip your toe</h3>
          <p className=" font-medium text-[15px] text-slate pt-5 ">
            Just getting started? No problem at all! Our free plan will take you
            a long way.
          </p>
          <h4 className="font-bold  text-[40px] pt-5 pb-1 ">Free</h4>
          <ul className=" text-[15px] font-light tracking-wide ">
            <li className="pt-4  ">
              <i className="fa-solid fa-check text-[12px] text-cyan pr-3"> </i>{" "}
              Unlimited products
            </li>
            <li className="pt-4">
              <i className="fa-solid fa-check text-[12px] text-cyan pr-4"></i>
              Basic analytics
            </li>
            <li className="pt-4">
              <i className="fa-solid fa-check text-[12px] text-cyan pr-4"></i>
              Limited marketplace exposure
            </li>
            <li className="pt-4">
              <i className="fa-solid fa-check text-[12px] text-cyan pr-4 "></i>
              10% fee per transaction
            </li>
          </ul>
        </div>

        {/* box 2 */}
        <div className="max-w-[445px] bg-cyan rounded-lg py-[56px] px-[38px] text-midnight relative">
          <img src={paid} className="absolute -top-8" />
          <h3 className="font-extrabold text-[18px]">Dive right in</h3>
          <p className=" font-medium text-[15px]  pt-5 opacity-55">
            Ready for the big time? Our paid plan will help you take your
            business to the next level.
          </p>
          <h4 className="font-extrabold  text-[40px] pt-5 pb-1 flex  items-center">
            $25.00
            <span className="text-[15px] font-medium pl-2 opacity-55 ">
              /month
            </span>
          </h4>
          <ul className=" text-[15px] font-semibold">
            <li className="pt-4">
              <i className="fa-solid fa-check  text-navy pr-3 "></i> Custom
              domain
            </li>
            <li className="pt-4">
              <i className="fa-solid fa-check text-navy pr-3"></i> Advanced
              analytics and reports
            </li>
            <li className="pt-4">
              <i className="fa-solid fa-check text-navy pr-3 "></i> High
              marketplace visibility
            </li>
            <li className="pt-4">
              <i className="fa-solid fa-check text-navy pr-3"></i> 5% fee per
              transaction
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
