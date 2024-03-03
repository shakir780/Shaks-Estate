import { getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { FacebookAuthProvider } from "firebase/auth";
import { signInSuccess, setOpenRegisterModal } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { IoLogoFacebook } from "react-icons/io";

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
      dispatch(setOpenRegisterModal(false));
    } catch (error) {
      console.log("could not sign in with google", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleFaceBookClick}
      className="border border-gray-950  text-black  p-3 rounded-lg uppercase hover:bg-gray-100 disabled:opacity-80"
    >
      <div className="flex items-center">
        <span className="text-2xl">
          <IoLogoFacebook />
        </span>
        <span className="text-center ml-[20px] md:ml-[140px] text-xs md:text-lg">
          Continue with facebook
        </span>
      </div>
    </button>
  );
};
