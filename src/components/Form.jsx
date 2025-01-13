import { Formik } from "formik";

function Form() {
  return (
    <div className="bg-midnight  text-center pb-[100px] font-manrope text-white">
      <div className="bg-footer-squiggle bg-no-repeat bg-cotain bg-center w-full h-[288px] flex items-center flex-col  ">
        <h2 className="text-[32px] font-extrabold  pt-[100px]">
          Get notified when we launch
        </h2>

        <form className="w-[476px] pt-[40px] pb-[25px] ">
          <input
            id="email"
            name="email"
            type="email"
            placeholder=" Email address"
            className="w-[320px] h-[48px] bg-navy  rounded-3xl pl-4 outline-none"
          />
          <button
            type="submit"
            className="bg-cyan ml-4 text-navy text-[15px] font-extrabold w-[140px] h-[48px] rounded-3xl"
          >
            Get notified
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
