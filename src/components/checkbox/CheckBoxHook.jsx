import React from "react";
import { useController } from "react-hook-form";

const CheckBoxHook = ({ control, ...props }) => {
  const { field } = useController({
    name: props.name,
    control,
    defaultValue: props.value,
  });
  console.log(field);
  return (
    <input
      type="checkbox"
      className="w-6 custom-checkbox"
      {...field}
      {...props}
      checked={field.value}
    />
  );
};

export default CheckBoxHook;
