import React, { useEffect, useState } from "react";
import { useController, useWatch } from "react-hook-form";
import useClickOutSide from "../../hooks/useClickOutSide";

const DropDownHook = ({ control, name, setValue, data, lableDropdown }) => {
  const { nodeRef, show, setShow } = useClickOutSide();
  const dropDownValue = useWatch({
    defaultValue: "",
    control,
    name: name,
  });

  const handleClickItem = (e) => {
    setValue(name, e.target.dataset.value);
    setShow(false);
    setLabelJob(e.target.textContent);
  };

  const [labelJob, setLabelJob] = useState(lableDropdown);
  useEffect(() => {
    if (dropDownValue == "") setLabelJob(lableDropdown);
  });
  return (
    <div className="relative cursor-pointer">
      <div
        className="p-5 rounded-lg border border-gray-300 bg-white flex items-center justify-between"
        ref={nodeRef}
        onClick={() => setShow(!show)}
      >
        <span>{labelJob || lableDropdown}</span>
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
  );
};

export default DropDownHook;
