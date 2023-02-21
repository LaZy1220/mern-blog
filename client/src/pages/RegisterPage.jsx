import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../redux/slices/authSlice";
import { toast } from "react-toastify";

export const RegisterPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    try {
      dispatch(registerUser({ username, password }));
      setPassword("");
      setUserName("");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (status) {
      toast(status);
    }
  }, [status]);
  return (
    <form
      className="w-1/4 h-60 mx-auto mt-40"
      onSubmit={(e) => e.preventDefault()}
    >
      <h1 className="text-lg text-white text-center">Регистрация</h1>
      <label className="text-xs text-gray-400">
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Username"
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-2 px-4 text-xs outline-none placeholder:text-gray-700"
        />
      </label>
      <label className="text-xs text-gray-400">
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-2 px-4 text-xs outline-none placeholder:text-gray-700"
        />
      </label>
      <div className="flex gap-8 justify-center mt-4">
        <button
          type="submit"
          onClick={handleSubmit}
          className="flex justify-center items-center bg-gray-600 py-2 px-4 text-xs text-white rounded-sm "
        >
          Создать
        </button>
        <Link
          to={"/login"}
          className="flex justify-center items-center text-xs text-white"
        >
          Уже есть аккаунт?
        </Link>
      </div>
    </form>
  );
};
