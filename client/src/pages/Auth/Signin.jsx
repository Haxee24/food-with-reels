import { useState } from "react";
import { Link } from "react-router";

function SignUp({ partner }) {
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    storeName: "",
    storeAddress: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      name: form.name,
      email: form.email,
      password: form.password,
      role: partner ? "partner" : "customer",
      ...(partner && {
        store: {
          name: form.storeName,
          address: form.storeAddress
        }
      })
    };

    console.log(payload);
  };

  const inputStyle =
    "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
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
            <>
              <div className="border-t pt-4">
                <h4 className="font-semibold mb-2 text-gray-700">
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
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-200"
          >
            Create Account
          </button>
        </form>

        <div className="mt-6 text-sm text-center space-y-2">
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