import React from "react";
import google from "../Assets/google.png";
import github from "../Assets/github.png";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/Logo.png";
import ClipLoader from "react-spinners/CircleLoader";

function Login() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { loginWithRedirect } = useAuth0();

  if (isLoading) {
    return (
      <div className="w-[100%] h-[100%] flex flex-col items-center justify-center">
        <ClipLoader
          color={"#8257E5"}
          size={70}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="w-[100%] h-[100%] flex flex-col items-center justify-center">
        <div className="font-bold text-2xl mb-8 text-black font-roboto_bold text-center ">
          Welcome to PaperPilot!
        </div>
        <button
          onClick={() => loginWithRedirect()}
          type="button"
          className="bg-[#FFFDD0] hover:bg-[#AC97DB] text-black font-bold py-2 px-4 rounded-full border-[1px] border-black focus:outline-none focus:shadow-outline w-64 shadow-xl shadow-[#AC97DB] mb-5"
        >
          <img src={logo} alt="logo" class="inline-block mr-2 h-5 w-5" />
          <span className="inline-block"> Login here to continue</span>
        </button>
      </div>
    );
  }

  const navigate = useNavigate();
  React.useEffect(() => {
    const redirectTimer = setTimeout(() => {
      if (isAuthenticated) {
        navigate("/select");
      }
    }, 2000);
    return () => clearTimeout(redirectTimer);
  }, [navigate]);

  return (
    <div className="w-[100%] h-[100%] flex flex-col items-center justify-center font-bold text-2xl mb-8 text-[#714CC2] text-center">
      Welcome {user.name}
    </div>
  );
}

export default Login;
