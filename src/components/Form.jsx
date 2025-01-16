import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function EmailForm() {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Oops! This doesn't look like an email address.")
      .required("Email is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    alert(`Email submitted successfully: ${values.email}`);
    resetForm(); // Clear the form after successful submission
  };

  return (
    <div className="bg-midnight pb-[100px] font-manrope text-white">
      <div className="sm:bg-footer-squiggle bg-no-repeat  bg-center w-full h-[288px] flex items-center flex-col max-lg:h-[140px] max-sm:h-full  max-lg:bg-cover">
        <div className="max-sm:bg-footer-squiggle bg-cover bg-no-repeat  bg-center w-full text-center flex justify-center  max-sm:h-[100px]">
          <h2 className="text-[32px] font-extrabold  pt-[100px] max-lg:pt-[5px] max-sm:w-[212px]  max-sm:text-[24px] ">
            Get notified when we launch
          </h2>
        </div>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form
              className="w-[476px] pt-[40px] pb-[25px] flex max-sm:flex-col max-sm:w-full max-sm:justify-center max-sm:items-center max-sm:gap-4 max-sm:pt-4 "
              noValidate
            >
              <div className="max-sm:w-full ">
                <Field
                  type="email"
                  name="email"
                  placeholder=" Email address"
                  className={`w-[320px] h-[48px] bg-navy  rounded-3xl pl-4 outline-none focus:border-2  transition-colors ${
                    errors.email && touched.email
                      ? "border-red"
                      : "focus:border-cyan"
                  } placeholder:text-white placeholder:opacity-40  placeholder:font-extrabold  placeholder:text-[15px] font-extrabold text-[15px] max-sm:w-[90%] max-sm:ml-[5%] `}
                />

                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-[12px] font-medium ml-[18px] text-red  mt-[10px] max-sm:ml-[10%]"
                />
              </div>

              <button
                type="submit"
                className="bg-cyan ml-4 text-navy text-[15px] font-extrabold w-[140px] h-[48px] rounded-3xl border-2 border-cyan hover:bg-transparent active:bg-transparent active:text-white  hover:text-white max-sm:w-[90%] max-sm:ml-0 "
              >
                Get Notified
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default EmailForm;

{
  /* <div className="bg-midnight   pb-[100px] font-manrope text-white">
<div className="bg-footer-squiggle bg-no-repeat bg-cotain bg-center w-full h-[288px] flex items-center flex-col  ">
  <h2 className="text-[32px] font-extrabold  pt-[100px]">
    Get notified when we launch
  </h2>
  <Formik
    initialValues={{ email: "" }}
    validationSchema={Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
    })}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    <Form className="w-[476px] pt-[40px] pb-[25px] flex ">
      <div>
        <Field
          name="email"
          type="email"
          placeholder=" Email address"
          className="w-[320px] h-[48px] bg-navy  rounded-3xl pl-4 outline-none"
        />
        <ErrorMessage name="email" />
      </div>
      <button
        type="submit"
        className="bg-cyan ml-4 text-navy text-[15px] font-extrabold w-[140px] h-[48px] rounded-3xl border-2 border-cyan hover:bg-transparent"
      >
        Get notified
      </button>
    </Form>
  </Formik>
</div>
</div> */
}
