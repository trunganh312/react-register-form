import { useField } from "formik";
import React from "react";

const CheckBoxFomik = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <React.Fragment>
      <div className="mb-[15px] w-full max-w-[300px] mx-auto flex gap-3">
        <input
          type="checkbox"
          className="w-6 custom-checkbox"
          {...field}
          {...props}
          checked={field.value}
        />
        <label htmlFor="term" className="cursor-pointer text-[#999999]">
          I accept the terms and conditions
        </label>
      </div>
      {meta?.error && meta.touched ? (
        <p className="text-xs text-[#E74C3C]">{meta.error}</p>
      ) : null}
    </React.Fragment>
  );
};

export default CheckBoxFomik;
