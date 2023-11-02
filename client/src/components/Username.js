import React from 'react'
import login from "./login.png";

export default function Username() {
  return (
    <div className=" h-screen flex flex-col items-center bg-fuchsia-500">
      <img
        src={login}
        alt="Barking Dog"
        className="transform scale-50 mb--70 "
        style={{ marginTop: "-60px" }}
      />
      <div
        className="w-80 mx-auto p-6  bg-white rounded-lg shadow-lg"
        style={{ marginTop: "-60px" }}
      >
        <div className="mb-4">
          <h3 className="font-bold pb-5">Sign In</h3>
          <input
            type="email"
            id="email"
            className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            id="password"
            className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
            placeholder="Password"
          />
        </div>

        <div className="text-center">
          <a
            href="/selectlang"
            className=" bg-purple-800 px-5 py-2 mt-8 rounded-full hover:bg-pink-800 font-bold"
          >
            Log In
          </a>
        </div>
      </div>
      <h3 className=" mt-10">
        Create new Account?
        <b>
          <span>
            <a href="/register">Sign Up</a>
          </span>
        </b>
      </h3>
    </div>
  );
}
