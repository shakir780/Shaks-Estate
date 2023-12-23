import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { FaSpinner } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { app } from "../firebase";
interface RootState {
  user: {
    signUpClicked: boolean;
    loading: boolean;
  };
}

const OAuth = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.user.loading);

  const handleGoogleCLick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
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
    } catch (error) {
      console.log("could not sign in with google", error);
    }
  };
  return (
    <button
      type="button"
      onClick={handleGoogleCLick}
      className="bg-red-400 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
      disabled={loading} // Disable the button when loading is true
    >
      {loading ? (
        <div className="text-center flex  justify-center">
          <FaSpinner className="animate-spin mr-2 text-2xl" />
        </div>
      ) : (
        // Show "Sign Up" or "Log In" text based on signUpClicked when loading is false
        " Continue with Google"
      )}
    </button>
  );
};

export default OAuth;
