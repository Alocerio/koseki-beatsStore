import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = ({
  isAuth,
  setIsAuth,
  createUser,
  setNewName,
  setNewPassword,
}) => {
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <div class="flex justify-center h-screen w-screen items-center">
      <div class="w-full md:w-1/2 flex flex-col items-center ">
        <h1 class="text-center text-2xl font-bold mb-6">LOGIN</h1>
        <div class="w-3/4 mt-4">
          <button
            type="submit"
            class="py-4 mb-4 bg-blue-400 w-full rounded text-white bg-black font-bold hover:bg-secondary"
            onClick={signInWithGoogle}
          >
            {" "}
            Log in with Google
          </button>
        </div>
        <div class="w-3/4 mb-6">
          <input
            type="email"
            name="email"
            id="email"
            class="w-full py-4 px-8  placeholder:font-semibold rounded hover:ring-2  outline-black"
            placeholder="User Name"
            onChange={(event) => {
              setNewName(event.target.value);
            }}
          />
        </div>

        <div class="w-3/4 mb-6">
          <input
            type="password"
            name="password"
            id="password"
            class="w-full py-4 px-8 placeholder:font-semibold rounded hover:ring-2 outline-black "
            placeholder="Password"
            onChange={(event) => {
              setNewPassword(event.target.value);
            }}
          />
        </div>

        <div class="w-3/4 flex flex-row justify-between">
          <div class=" flex items-center gap-x-1">
            <input type="checkbox" name="remember" id="" class=" w-4 h-4  " />
            <label for="" class="text-sm text-slate-400">
              Remember me
            </label>
          </div>
          <div>
            <a href="/login" class="text-sm text-slate-400 hover:text-blue-500">
              Forgot?
            </a>
          </div>
        </div>

        <div class="w-3/4 mt-4">
          <button
            type="submit"
            class="py-4 mb-2 bg-blue-400 w-full rounded text-white bg-black font-bold hover:bg-secondary"
            onClick={createUser}
          >
            {" "}
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
