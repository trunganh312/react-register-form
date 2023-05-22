import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import CheckBoxHook from "../checkbox/CheckBoxHook";
import DropDownHook from "../dropdown/DropDownHook";
import InputHook from "../input/InputHook";
import RadioHook from "../radio/RadioHook";

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

const schema = Yup.object({
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
}).required();
const RegisterHook = () => {
  const {
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isSubmitSuccessful },
    control,
    watch,
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      gender: "male",
    },
  });

  const onSubmitHandler = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        if (isValid) {
          console.log(values);
          reset({
            username: "",
            email: "",
            password: "",
            job: "",
            term: false,
          });
        }
      }, 2000);
    });
  };
  const watchGender = watch("gender");
  return (
    <form
      className="max-w-[300px] mx-auto"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <InputHook
        type="text"
        label="Username"
        placeholder="Enter your username"
        name="username"
        id="username"
        control={control}
        errors={errors}
      ></InputHook>
      <InputHook
        type="password"
        label="Password"
        placeholder="Enter your password"
        name="password"
        id="password"
        control={control}
        errors={errors}
      ></InputHook>
      <InputHook
        type="email"
        label="Email address"
        placeholder="Enter your email"
        name="email"
        id="email"
        control={control}
        errors={errors}
      ></InputHook>
      <div className="flex flex-col gap-1 mb-5">
        <label className="cursor-pointer font-semibold">Gender</label>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-x-3">
            <RadioHook
              control={control}
              name="gender"
              value="male"
              checked={watchGender === "male"}
            ></RadioHook>
            <span>Male</span>
          </div>
          <div className="flex items-center gap-x-3">
            <RadioHook
              control={control}
              name="gender"
              value="female"
              checked={watchGender === "female"}
            ></RadioHook>
            <span>Female</span>
          </div>
        </div>
      </div>
      {errors.gender && (
        <p className="text-sm text-red-500">{errors.gender.message}</p>
      )}
      <div className="mb-[15px] w-full max-w-[300px] mx-auto flex flex-col gap-1">
        <label htmlFor="job" className="cursor-pointer font-semibold">
          Are you
        </label>
        <DropDownHook
          name="job"
          control={control}
          id="job"
          setValue={setValue}
          data={dropDownData}
          lableDropdown={
            isSubmitSuccessful ? "Select your job" : "Select your job"
          }
        ></DropDownHook>
      </div>
      {errors.job && (
        <p className="text-sm text-red-500">{errors.job.message}</p>
      )}
      <div className="my-[15px] w-full max-w-[300px] mx-auto flex  gap-3">
        <CheckBoxHook
          name="term"
          control={control}
          id="term"
          value={false}
        ></CheckBoxHook>
        <label htmlFor="term" className="cursor-pointer text-[#999999]">
          I accept the terms and conditions
        </label>
      </div>
      {errors.term && (
        <p className="text-sm text-red-500">{errors.term.message}</p>
      )}
      <button
        type="submit"
        className={`w-full rounded-md outline-none bg-blue-600 p-3
              text-white ${isSubmitting && "cursor-default opacity-70"} `}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div className=" w-5 h-5 m-auto  animate-spin border-2 border-white border-t-2 border-t-transparent rounded-full "></div>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default RegisterHook;
