import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

function SignUp({ partner }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    storeName: "",
    storeAddress: "",
    storePhone: "",
    termsAccepted: false
  });

const handleChange = (e) => {
  const { name, value, type, checked, files } = e.target;

  setForm({
    ...form,
    [name]:
      type === "checkbox"
        ? checked
        : type === "file"
        ? files[0]   // take the first file
        : value
  });
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.termsAccepted) {
      alert("You must accept Terms & Conditions");
      return;
    }

    const formData = new FormData();

    formData.append("fullname", form.name);
    formData.append("username", form.username);
    formData.append("email", form.email);
    formData.append("password", form.password);
    console.log(form.heroImage)

    if (partner) {
      formData.append("store[storename]", form.storeName);
      formData.append("store[address]", form.storeAddress);
      formData.append("store[phone]", form.storePhone);

      if (form.heroImage) {
        formData.append("heroImage", form.heroImage);
      }
    }

    try {
      const base = import.meta.env.VITE_BACKEND + "/users";
      const endpoint = partner
        ? base + "/register-partner"
        : base + "/register";

      const response = await axios.post(endpoint, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  const inputStyle = "w-full px-4 py-2 border rounded-lg bg-white dark:bg-neutral-950 text-gray-800 dark:text-white border-gray-300 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-orange-500";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black px-4">
      <div className="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-xl w-full max-w-md border border-transparent dark:border-neutral-800">

        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
          {partner ? "Register Your Store" : "Create Customer Account"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            className={inputStyle}
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />

          <input
            className={inputStyle}
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
          />

          <input
            className={inputStyle}
            type="email"
            name="email"
            placeholder="Email"
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

          {partner && (
            <div className="border-t pt-4">

              <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">
                Store Details
              </h4>

              <input
                className={inputStyle}
                name="storeName"
                placeholder="Store Name"
                onChange={handleChange}
                required
              />

              <input
                className={`${inputStyle} mt-3`}
                name="storeAddress"
                placeholder="Store Address"
                onChange={handleChange}
                required
              />

              <input
                className={`${inputStyle} mt-3`}
                name="storePhone"
                placeholder="Store Contact Number"
                onChange={handleChange}
                required
              />

              {form.heroImage && (
                <img
                  src={URL.createObjectURL(form.heroImage)}
                  alt="Preview"
                  className="mt-3 h-32 w-full object-cover rounded-lg"
                />
              )}


              <input
                type="file"
                name="heroImage"
                accept="image/*"
                className={`${inputStyle} mt-3`}
                onChange={handleChange}
                required
              />

            </div>
          )}

          <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
            <input
              type="checkbox"
              name="termsAccepted"
              onChange={handleChange}
              required
            />
            <span>
              I agree to the{" "}
              <a className="text-orange-500 hover:underline">
                Terms & Conditions
              </a>
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Create Account
          </button>

        </form>

        <div className="mt-6 text-sm text-center text-gray-600 dark:text-gray-400 space-y-2">

          <p>
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-orange-500 hover:underline font-medium"
            >
              Sign In
            </Link>
          </p>

          {!partner && (
            <p>
              Want to register as food partner?{" "}
              <Link
                to="/signup/food-partner"
                className="text-orange-500 hover:underline font-medium"
              >
                Register Store
              </Link>
            </p>
          )}

          {partner && (
            <p>
              Just a customer?{" "}
              <Link
                to="/signup/customer"
                className="text-orange-500 hover:underline font-medium"
              >
                Sign up as Customer
              </Link>
            </p>
          )}

        </div>

      </div>
    </div>
  );
}

export default SignUp;