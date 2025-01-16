import freedom from "../assets/imgs/illustration-financial-freedom.svg";
import work from "../assets/imgs/illustration-work-anywhere.svg";
import passions from "../assets/imgs/illustration-passions.svg";
import lifestyle from "../assets/imgs/illustration-lifestyle.svg";

function Features() {
  return (
    <div className="bg-midnight py-[100px] font-manrope max-lg:py-[100px] max-sm:pb-[144px] max-sm:pt-0">
      <div className="flex gap-4 justify-center h-[383px] max-lg:flex-col max-lg:h-fit max-lg:items-center max-lg:max-w-[625px] max-lg:mx-auto max-lg:gap-10 max-sm:gap-16">
        {/* passions */}
        <div className="max-lg:flex max-lg:justify-center max-lg:items-center max-lg:self-end max-sm:flex-col max-sm:text-center max-sm:self-center">
          <div className="bg-navy w-[160px] h-[164px] flex justify-center items-center rounded-[45px] max-lg:w-[120px] max-lg:h-[124px] max-sm:mb-8">
            <img
              src={passions}
              alt="passions"
              className="max-lg:w-[66px] max-lg:h-[80px]"
            />
          </div>
          <div className="max-lg:pl-10 max-sm:pl-0">
            <h3 className="text-[18px] font-bold text-white pt-11 pb-4 max-lg:p-0 max-lg:pb-4">
              Indulge your passions
            </h3>
            <p className="text-[15px] font-medium text-slate max-w-[255px] max-lg:max-w-[340px]">
              Your passions shouldn&apos;t be just for the weekend. Earn a
              living doing what you love.
            </p>
          </div>
        </div>

        {/* freedom */}
        <div className="lg:self-end max-lg:flex max-lg:justify-center max-lg:items-center max-sm:flex-col max-sm:text-center">
          <div className="bg-navy w-[160px] h-[164px] flex justify-center items-center rounded-[45px] max-lg:w-[120px] max-lg:h-[124px] max-sm:mb-8">
            <img
              src={freedom}
              alt="freedom"
              className="max-lg:w-[56px] max-lg:h-[67px]"
            />
          </div>
          <div className="max-lg:pl-10 max-sm:pl-0">
            <h3 className="text-[18px] font-bold text-white pt-11 pb-4 max-lg:p-0 max-lg:pb-4">
              Gain financial freedom
            </h3>
            <p className="text-[15px] font-medium text-slate max-w-[255px] max-lg:max-w-[340px]">
              Start making money work for you. There’s nothing quite like
              earning while you sleep.
            </p>
          </div>
        </div>

        {/* lifestyle */}
        <div className="max-lg:flex max-lg:justify-center max-lg:items-center max-lg:self-end max-sm:flex-col max-sm:text-center max-sm:self-center">
          <div className="bg-navy w-[160px] h-[164px] flex justify-center items-center rounded-[45px] max-lg:w-[120px] max-lg:h-[124px] max-sm:mb-8 ">
            <img
              src={lifestyle}
              alt="lifestyle"
              className="max-lg:w-[60px] max-lg:h-[71px]"
            />
          </div>
          <div className="max-lg:pl-10 max-sm:pl-0">
            <h3 className="text-[18px] font-bold text-white pt-11 pb-4 max-lg:p-0 max-lg:pb-4">
              Choose your lifestyle
            </h3>
            <p className="text-[15px] font-medium text-slate max-w-[255px] max-lg:max-w-[340px]">
              Own your daily schedule. Fancy a lie-in? Go for it! Take charge of
              your week
            </p>
          </div>
        </div>

        {/* work */}
        <div className="lg:self-end max-lg:flex max-lg:justify-center max-lg:items-center max-sm:flex-col max-sm:text-center">
          <div className="bg-navy w-[160px] h-[164px] flex justify-center items-center rounded-[45px] max-lg:w-[120px] max-lg:h-[124px] max-sm:mb-8">
            <img
              src={work}
              alt="work"
              className="max-lg:w-[78px] max-lg:h-[56px]"
            />
          </div>
          <div className="max-lg:pl-10 max-sm:pl-0">
            <h3 className="text-[18px] font-bold text-white pt-11 pb-4 max-lg:p-0 max-lg:pb-4">
              Work from anywhere
            </h3>
            <p className="text-[15px] font-medium text-slate max-w-[255px] max-lg:max-w-[340px]">
              Selling online means not being pinned down. Want to work AND
              travel? Go for it!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
