import React, { useState } from "react";
import "./Signup.css";
import Logo1 from "../../assets/Images/Group (3).png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/slices/userSlice";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form data:", formData); // Debugging log

    try {
      const result = await dispatch(registerUser(formData)).unwrap(); // Ensures proper response handling
      console.log("Signup result:", result);

      alert("Signup successful!");
      navigate("/Dashboard");
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full">
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 bg-white">
        <h1 className="text-4xl md:text-6xl font-bold Right-up">Sign Up</h1>
        <p className="text-gray-500 mb-6 pt-2">Create Account</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-semibold">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 Sign-right text-white rounded-lg"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
          {error && (
            <p className="text-red-500">{error.message || "Signup failed"}</p>
          )}
        </form>

        <Link to="/Login" className="mt-4 text-gray-500 block text-center">
          Already have an account?{" "}
          <span className="text-green-900 font-semibold hover:underline">
            Login
          </span>
        </Link>
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-white Sign-right p-6 min-h-[52vh] md:min-h-screen">
        <div className="flex items-center space-x-2 ">
          <img src={Logo1} alt="Logo" className="h-10" />
          <p className="font-medium">Raid Points</p>
        </div>
        <p className="text-7xl md:text-7xl font-bold mt-10 md:mt-20 text-center">
          Hey There!
        </p>
      </div>
    </div>
  );
};

export default Signup;
