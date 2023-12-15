import { IoCloseSharp } from "react-icons/io5";

const RegisterModal = ({
  setOpenRegisterModal,
  openRegisterModal,
  setOpenAccount,
  openAccount,
}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white w-[500px] rounded-lg p-8 ">
        <div className="flex justify-between items-center pb-6">
          <header className="text-center font-bold text-md text-gray-700  ">
            <span>Log in or sign up</span>
          </header>
          <div
            onClick={() => {
              setOpenRegisterModal(false);
              setOpenAccount(false);
            }}
            className="cursor-pointer"
          >
            <IoCloseSharp className="text-2xl" />
          </div>
        </div>

        <hr />
        <div className="p-4">
          <span className="font-semibold text-lg">Welcome to Shaks Estate</span>
        </div>
        <h2 className="text-2xl mb-4 text-center font-semibold">Login</h2>
        <form className="flex flex-col gap-4 py-8">
          <input
            type="email"
            placeholder="email"
            className="border p-3 rounded-lg"
            id="email"
          />
          <input
            type="password"
            placeholder="password"
            className="border p-3 rounded-lg"
            id="password"
          />
          <button className="bg-blue-400 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
            Log In
          </button>
        </form>
        <div className="flex gap-2 mt-5">
          <p>Dont Have an account?</p>
          <div>
            <span className="text-blue-700">Sign up</span>
          </div>
        </div>

        {/* Add sign-up form fields here */}
      </div>
    </div>
  );
};

export default RegisterModal;
