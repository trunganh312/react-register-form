import { useField } from "formik";
import React, { useEffect, useState } from "react";
import { useController, useWatch } from "react-hook-form";
import useClickOutSide from "../../hooks/useClickOutSide";

const DropDownFomik = ({ name, data, setValue }) => {
  const { nodeRef, show, setShow } = useClickOutSide();
  const [field, meta] = useField({ name });
  const [label, setLabel] = useState("Select your job");
  const handleClickItem = (e) => {
    setLabel(e.target.textContent);
    setShow(false);
    setValue(name, e.target.dataset.value);
  };

  const [defaultLabel, setDefaultLabel] = useState("Select your job");

  useEffect(() => {
    if (field.value === "") {
      setDefaultLabel("Select your job");
      setLabel("Select your job");
    }
  }, [field.value]);
  return (
    <React.Fragment>
      <div className="relative cursor-pointer">
        <div
          className="p-5 rounded-lg border border-gray-300 bg-white flex items-center justify-between"
          ref={nodeRef}
          onClick={() => setShow(!show)}
        >
          <span>{label || defaultLabel}</span>
        </div>
        <div
          className={`w-full bg-white absolute rounded-lg ${
            show ? "" : "opacity-0 invisible "
          }`}
        >
          {data.map((item) => {
            return (
              <div
                className="p-5 hover:bg-gray-100"
                onClick={handleClickItem}
                data-value={item.value}
                key={item.id}
              >
                {item.text}
              </div>
            );
          })}
        </div>
      </div>
      {meta?.error && meta.touched ? (
        <p className="text-xs text-[#E74C3C]">{meta.error}</p>
      ) : null}
    </React.Fragment>
  );
};

export default DropDownFomik;
