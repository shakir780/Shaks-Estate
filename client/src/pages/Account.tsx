import React, { useEffect, useRef } from "react";

const Account = () => {
  const fileRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-center font-bold py-6 text-3xl">Personal Info</h1>
      <form className="flex flex-col gap-4">
        <input ref={fileRef} type="file" className="hidden" accept="img/*" />
        <img
          onClick={() => fileRef.current && fileRef.current.click()}
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center"
          src=""
          alt=""
        />
        <input className="border p-3 rounded-lg" type="username" />
        <input className="border p-3 rounded-lg" type="email" />
        <input className="border p-3 rounded-lg" type="password" />
        <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer font-bold">
          Deactivate Account
        </span>
        <span className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
};

export default Account;
