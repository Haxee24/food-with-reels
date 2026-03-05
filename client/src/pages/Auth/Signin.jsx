import { useState } from "react";
import { Link } from "react-router";
import axios from 'axios';
import { useNavigate } from "react-router";

function SignIn() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    login: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const payload = {
      userid: form.login,
      password: form.password
    };
    const options = {
      withCredentials: true
    };
    const endpoint = import.meta.env.VITE_BACKEND + "/users/login";
    axios.post(endpoint, payload, options)
    .then((res)=>console.log(res))
    .catch((err)=>console.error(err));
    navigate("/");
  };

  const inputStyle =
    "w-full px-4 py-2 border rounded-lg bg-white dark:bg-neutral-950 text-gray-800 dark:text-white border-gray-300 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-orange-500";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black px-4">

      <div className="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-xl w-full max-w-md border border-transparent dark:border-neutral-800">

        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Sign In
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            className={inputStyle}
            name="login"
            placeholder="Username or Email"
            onChange={handleChange}
            required
          />

          <input
            className={inputStyle}
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Sign In
          </button>

        </form>

        <div className="mt-6 text-sm text-center text-gray-600 dark:text-neutral-400">

          <p>
            Don't have an account?{" "}
            <Link
              to="/signup/customer"
              className="text-orange-500 hover:underline font-medium"
            >
              Register
            </Link>
          </p>

        </div>

      </div>
    </div>
  );
}

export default SignIn;