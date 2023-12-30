import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { FcGoogle } from "react-icons/fc";

import { useDispatch } from "react-redux";
import { signInSuccess, setOpenAccount } from "../redux/user/userSlice";
import { app } from "../firebase";

const OAuth = () => {
  const dispatch = useDispatch();

  const handleGoogleCLick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signInSuccess(data));
      dispatch(setOpenAccount(false));
    } catch (error) {
      console.log("could not sign in with google", error);
    }
  };
  return (
    <button
      type="button"
      onClick={handleGoogleCLick}
      className="border border-gray-950  text-black p-3 rounded-lg uppercase hover:bg-gray-100 disabled:opacity-80"
      // Disable the button when loading is true
    >
      <div className="flex items-center  ">
        <span className="text-2xl">
          <FcGoogle />
        </span>
        <span className="text-center ml-[20px] md:ml-[140px] text-xs md:text-lg">
          Continue with Google
        </span>
      </div>
    </button>
  );
};

export default OAuth;
