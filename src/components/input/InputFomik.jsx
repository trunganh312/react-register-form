import { useField } from "formik";
import React from "react";
const InputFomik = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="mb-[15px] w-full max-w-[300px] mx-auto flex flex-col relative">
      <label
        htmlFor={props.id}
        className=" font-semibold text-sm cursor-pointer text-[#000000]"
      >
        {label}
      </label>
      <input
        className="my-1 p-4 border border-gray-100 rounded-lg bg-white focus:border-[#2979FF] text-sm outline-none transition-all "
        {...field}
        {...props}
      />

      {meta?.error && meta.touched ? (
        <p className="text-xs text-[#E74C3C]">{meta.error}</p>
      ) : null}
    </div>
  );
};

export default InputFomik;
