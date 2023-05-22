import { useField } from "formik";
import React from "react";

const RadioFomik = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <label className="cursor-pointer custom-radio">
      <input {...field} type="radio" className="hidden" {...props} />
      <div className="w-full h-full bg-white rounded-full"></div>
    </label>
  );
};

export default RadioFomik;
