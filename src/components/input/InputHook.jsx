import React from "react";
import { useController } from "react-hook-form";
const InputHook = ({ label, control, onSubmit, errors, ...props }) => {
  const hasError = errors[props.name];

  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });

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

      {hasError?.message ? (
        <p className="text-xs text-[#E74C3C]">{hasError?.message}</p>
      ) : null}
    </div>
  );
};

export default InputHook;
