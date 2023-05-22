import { ErrorMessage, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import CheckBoxFomik from "../checkbox/CheckBoxFomik";
import DropDownFomik from "../dropdown/DropDownFomik";
import InputFomik from "../input/InputFomik";
import RadioFomik from "../radio/RadioFomik";
const dropDownData = [
  {
    id: 1,
    value: "teacher",
    text: "Teacher",
  },
  {
    id: 2,
    value: "developer",
    text: "Developer",
  },
  {
    id: 3,
    value: "doctor",
    text: "Doctor",
  },

  {
    id: 4,
    value: "constructor",
    text: "Constructor",
  },
];
const RegisterFormik = () => {
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        job: "",
        gender: "male",
        term: false,
      }}
      validationSchema={Yup.object({
        username: Yup.string().required("Please enter your username"),
        email: Yup.string()
          .email("Please enter valid email address")
          .required("Please enter your email address"),
        password: Yup.string()
          .min(8, "Your password must be at least 8 characters or greater")
          // .matches(
          //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          //   {
          //     message:
          //       "Your password must have at least 1 uppercase, 1 lowercase, 1 special character",
          //   }
          // )
          .required("Please enter your password"),
        gender: Yup.string()
          .required("Please select your gender")
          .oneOf(["male", "female"], "You can only select male or female"),
        job: Yup.string().required("Please select your job"),
        term: Yup.boolean()
          .required("Vui lòng chấp nhận điều khoản")
          .oneOf([true], "Vui lòng chấp nhận điều khoản"),
      }).required()}
      onSubmit={(values, action) => {
        setTimeout(() => {
          action.setSubmitting(false);
          console.log(values);
          action.resetForm({
            username: "",
            email: "",
            password: "",
            job: "",
            gender: "male",
            term: false,
          });
        }, 3000);
      }}
    >
      {(fomik) => {
        const watchGender = fomik.values.gender;
        return (
          <Form className="max-w-[300px] mx-auto">
            <InputFomik
              name="username"
              placeholder="Please enter your username"
              label="Username"
              id="username"
            ></InputFomik>
            <InputFomik
              type="password"
              name="password"
              placeholder="Please enter your password"
              label="Password"
              id="password"
            ></InputFomik>
            <InputFomik
              type="email"
              name="email"
              placeholder="Please enter your email"
              label="Email"
              id="email"
            ></InputFomik>
            <div className="flex flex-col gap-1 mb-5">
              <label className="cursor-pointer font-semibold">Gender</label>
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-x-3">
                  <RadioFomik
                    name="gender"
                    value="male"
                    checked={watchGender === "male"}
                  ></RadioFomik>
                  <span>Male</span>
                </div>
                <div className="flex items-center gap-x-3">
                  <RadioFomik
                    name="gender"
                    value="female"
                    checked={watchGender === "female"}
                  ></RadioFomik>
                  <span>Female</span>
                </div>
              </div>
            </div>
            <div className="text-sm text-red-400">
              <ErrorMessage name="gender"></ErrorMessage>
            </div>
            <div className="mb-[15px] w-full max-w-[300px] mx-auto flex flex-col gap-1">
              <label htmlFor="job" className="cursor-pointer font-semibold">
                Are you
              </label>
              <DropDownFomik
                name="job"
                data={dropDownData}
                id="job"
                setValue={fomik.setFieldValue}
                dropDownLabel={fomik.initialValues.job}
              ></DropDownFomik>
            </div>
            <CheckBoxFomik name="term"></CheckBoxFomik>
            <button
              type="submit"
              className={`w-full rounded-md outline-none bg-blue-600 p-3
              text-white ${fomik.isSubmitting && "cursor-default opacity-70"} `}
              disabled={fomik.isSubmitting}
            >
              {fomik.isSubmitting ? (
                <div className=" w-5 h-5 m-auto  animate-spin border-2 border-white border-t-2 border-t-transparent rounded-full "></div>
              ) : (
                "Submit"
              )}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default RegisterFormik;
