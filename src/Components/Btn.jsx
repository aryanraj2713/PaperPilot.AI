import React, { useState } from "react";

function Btn(props) {
  /*   const [isButtonDisabled, setIsButtonDisabled] = useState(false)*/
  const selectedColor = "bg-[#714CC2] hover:bg-[#714CC2] active:bg-[#633BBC]";
  const defaultColor = "bg-[#FFFDD0] hover:bg-[#AC97DB] active:bg-[#633BBC]";
  const {
    setSelectedFields,
    selectedFields,
    setSelectedButtonNames,
    selectedButtonName,
  } = props;

  const handleClick = () => {
    if (selectedFields.has(props.name)) {
      setSelectedFields((previousFields) => {
        previousFields.delete(props.name);
        return new Set(previousFields.values());
      });
      setSelectedButtonNames((previousNames) =>
        previousNames.filter((n) => n !== props.name)
      );
    } else {
      setSelectedFields((previousFields) => {
        previousFields.add(props.name);
        return new Set(previousFields.values());
      });
      setSelectedButtonNames((previousNames) => [...previousNames, props.name]);
    }
  };

  const bgColor = selectedFields.has(props.name) ? selectedColor : defaultColor;
  const isButtonDisabled =
    !selectedFields.has(props.name) && selectedFields.size > 2;

  return (
    <div>
      <button
        className={`flex justify-around ${bgColor}  text-black font-bold py-2 px-4 rounded-full border-[1px] border-black focus:outline-none focus:shadow-outline w-48 sm:w-48 lg:w-72 mb-5  cursor-pointer`}
        onClick={handleClick}
        disabled={isButtonDisabled}
      >
        <span className="inline-block">{props.name}</span>
      </button>
    </div>
  );
}

export default Btn;
