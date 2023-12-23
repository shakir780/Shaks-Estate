import { getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { FacebookAuthProvider } from "firebase/auth";
import React from "react";
import { signInSuccess } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
export const FbAuth = () => {
  const dispatch = useDispatch();
  const handleFaceBookClick = async () => {
    try {
      const provider = new FacebookAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const res = await fetch("/api/auth/facebook", {
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
      onClick={handleFaceBookClick}
      className="bg-blue-400 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
    >
      Continue with Facebook
    </button>
  );
};
