import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Buttons";
import { useAuth0 } from "@auth0/auth0-react";
import Btn from "./Btn";

function Select(props) {
  const [selectedFields, setSelectedFields] = useState(new Set());
  const [selectedButtonNames, setSelectedButtonNames] = useState([]);

  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isAuthenticated) {
    console.log(user.email);
  }

  function Fetch() {
    const data = {
      email: user.email,
      interests: selectedButtonNames,
    };

    fetch("http://localhost:5050", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        // Handle the response data
        console.log(responseData);
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
  }

  const { button } = props;
  return (
    <div className="flex flex-col h-[100%] w-[100%] justify-around items-center p-5">
      <div>
        <div className="font-roboto_bold text-2xl pb-8">
          I want to read about...
        </div>
        <div className="font-roboto text-xs sm:text-xs lg:text-md font-semibold  pb-3 text-center">
          Please choose any three of your interests
        </div>
      </div>

      <div className=" flex flex-col items-center w-[90%] h-[50%] overflow-y-scroll mb-10 scrollbar-thin scrollbar-thumb-[#633BBC] scrollbar-thumb-rounded-lg scrollbar-track-rounded-lg scrollbar-track-[#AC97DB]">
        {props.button.map((el) => {
          return (
            <Btn
              key={el.key}
              name={el.name}
              selectedFields={selectedFields}
              setSelectedFields={setSelectedFields}
              selectedButtonNames={selectedButtonNames}
              setSelectedButtonNames={setSelectedButtonNames}
            />
          );
        })}
      </div>

      <Link to="/final">
        <button
          className="h-10 w-52 text-xl font-roboto bg-[#714CC2] hover:bg-[#8257E5] cursor-pointer rounded-md xl border border-x-1 border-y-1 border-solid border-[#16161d] shadow-xl text-white shadow-[#714CC2]"
          onClick={Fetch}
        >
          Select
        </button>
      </Link>
    </div>
  );
}

export default Select;
