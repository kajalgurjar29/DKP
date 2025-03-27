// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "../../redux/slices/userSlice";
// import "./Login.css";
// import Logo1 from "../../assets/Images/Group (3).png";
// import Logo2 from "../../assets/Images/google.png";

// const Login = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { loading, error } = useSelector((state) => state.user);

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const result = await dispatch(loginUser(formData)).unwrap();
//       console.log("Login successful:", result);
//       alert("Login successful!");
//       navigate("/Dashboard");
//     } catch (err) {
//       console.error("Login failed:", err);
//       alert(err?.message || "Invalid credentials. Please try again.");
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen w-full">
//       {/* Left Section */}
//       <div className="md:w-1/3 flex flex-col items-center justify-center left text-white p-6">
//         <div className="flex items-center space-x-2">
//           <img src={Logo1} alt="Logo" className="h-10" />
//           <p className="text-lg font-medium">Raid Points</p>
//         </div>
//         <h1 className="text-7xl md:text-6xl font-bold text-center mt-10 md:mt-20">
//           Welcome Back!
//         </h1>
//       </div>

//       {/* Right Section */}
//       <div className="md:w-1/2 flex items-center justify-center p-6">
//         <div className="w-full max-w-md">
//           <h2 className="text-2xl md:text-3xl font-bold right-login">Login</h2>
//           <p className="text-gray-500">
//             Welcome Back! Please login to your account.
//           </p>

//           {error && (
//             <p className="text-red-500">{error.message || "Login failed"}</p>
//           )}

//           <form className="mt-6" onSubmit={handleSubmit}>
//             <label className="block mb-2 text-gray-700 font-semibold">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
//               required
//             />

//             <label className="block mt-4 mb-2 text-gray-700 font-semibold">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
//               required
//             />

//             <div className="flex items-center justify-between mt-4">
//               <div>
//                 <input type="checkbox" className="mr-2 left" />
//                 <label className="text-gray-700 font-semibold">
//                   Remember Me
//                 </label>
//               </div>
//               <Link
//                 to="/Forgot"
//                 className="hover:underline right-login"
//               >
//                 Forgot Password?
//               </Link>
//             </div>

//             <button
//               type="submit"
//               className="w-full left text-white p-3 rounded-lg mt-6"
//               disabled={loading}
//             >
//               {loading ? "Logging in..." : "Login"}
//             </button>
//           </form>

//           <button className="w-full flex items-center justify-center border border-gray-300 p-3 rounded-lg hover:bg-gray-100 mt-4">
//             <img src={Logo2} alt="Google" className="w-6 h-6 mr-2" />
//             Sign in with Google
//           </button>

//           <Link to="/Signup" className="mt-4 block text-center text-gray-700">
//             New User?{" "}
//             <span className="hover:underline right-login font-semibold">
//               Signup
//             </span>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/slices/userSlice";
import "./Login.css";
import Logo1 from "../../assets/Images/Group (3).png";
import Logo2 from "../../assets/Images/google.png";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(loginUser(formData)).unwrap();
      console.log("Login successful:", result);

      localStorage.setItem(
        "user",
        JSON.stringify({
          id: result.user?.id,
          username: result.user?.username,
          email: result.user?.email,
          role: result.user?.role,
        })
      );
      localStorage.setItem("token", result.token); // Store token separately

      alert("Login successful!");
      navigate("/Dashboard");
    } catch (err) {
      console.error("Login failed:", err);
      alert(err?.message || "Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full">
      {/* Left Section */}
      <div className="md:w-1/3 flex flex-col items-center justify-center left text-white p-6">
        <div className="flex items-center space-x-2">
          <img src={Logo1} alt="Logo" className="h-10" />
          <p className="text-lg font-medium">Raid Points</p>
        </div>
        <h1 className="text-7xl md:text-6xl font-bold text-center mt-10 md:mt-20">
          Welcome Back!
        </h1>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <h2 className="text-2xl md:text-3xl font-bold right-login">Login</h2>
          <p className="text-gray-500">
            Welcome Back! Please login to your account.
          </p>

          {error && (
            <p className="text-red-500">{error.message || "Login failed"}</p>
          )}

          <form className="mt-6" onSubmit={handleSubmit}>
            <label className="block mb-2 text-gray-700 font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
              required
            />

            <label className="block mt-4 mb-2 text-gray-700 font-semibold">
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

            <div className="flex items-center justify-between mt-4">
              <div>
                <input type="checkbox" className="mr-2 left" />
                <label className="text-gray-700 font-semibold">
                  Remember Me
                </label>
              </div>
              <Link to="/Forgot" className="hover:underline right-login">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full left text-white p-3 rounded-lg mt-6"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <button className="w-full flex items-center justify-center border border-gray-300 p-3 rounded-lg hover:bg-gray-100 mt-4">
            <img src={Logo2} alt="Google" className="w-6 h-6 mr-2" />
            Sign in with Google
          </button>

          <Link to="/Signup" className="mt-4 block text-center text-gray-700">
            New User?{" "}
            <span className="hover:underline right-login font-semibold">
              Signup
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
