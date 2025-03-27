import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import {
  forgotPassword,
  verifyOtp,
  resetPassword,
  resetForgotState,
} from "../../redux/slices/forgotSlice";
import { Link } from "react-router-dom";
import Logo1 from "../../assets/Images/Group (3).png";
import "./Forgot.css";

function ForgotPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const { loading, message, error, otpVerified } = useSelector(
    (state) => state.forgot
  );

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState(1);

  useEffect(() => {
    dispatch(resetForgotState());
  }, [dispatch]);

  useEffect(() => {
    if (otpVerified) setStep(3);
  }, [otpVerified]);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") return;
    dispatch(forgotPassword(email)).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        setStep(2);
      }
    });
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp.trim() === "") return;
    dispatch(verifyOtp({ email, otp }));
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    if (newPassword.trim() === "") return;

    dispatch(resetPassword({ email, otp, newPassword })).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        alert("Password reset successful! Redirecting to login...");
        navigate("/login");
      }
    });
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      <div className="w-full md:w-1/3 for-left text-white flex flex-col items-center justify-center p-8 min-h-[40vh]">
        <div className="flex items-center space-x-2">
          <img src={Logo1} alt="Logo" className="h-8" />
          <p className="font-medium">Raid Points</p>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-center mt-10">
          Forgot Password?
        </h1>
      </div>

      <div className="w-full md:w-2/3 flex items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-md">
          {step === 1 && (
            <>
              <h2 className="text-3xl md:text-5xl font-bold for-text">
                Forgot Password
              </h2>
              <p className="text-gray-500 mt-2">
                No worries, we’ll send you reset instructions.
              </p>
              <form onSubmit={handleEmailSubmit} className="mt-6">
                <label className="block mb-2 text-gray-700 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="w-full for-left text-white p-3 rounded-lg mt-6"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send OTP"}
                </button>
              </form>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="text-3xl md:text-5xl font-bold for-text">
                Enter OTP
              </h2>
              <p className="text-gray-500 mt-2">
                Check your email for the OTP.
              </p>
              <form onSubmit={handleOtpSubmit} className="mt-6">
                <label className="block mb-2 text-gray-700 font-semibold">
                  OTP
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="w-full for-left text-white p-3 rounded-lg mt-6"
                  disabled={loading}
                >
                  {loading ? "Verifying..." : "Verify OTP"}
                </button>
              </form>
            </>
          )}

          {step === 3 && otpVerified && (
            <>
              <h2 className="text-3xl md:text-5xl font-bold for-text">
                Reset Password
              </h2>
              <form onSubmit={handlePasswordReset} className="mt-6">
                <label className="block mb-2 text-gray-700 font-semibold">
                  New Password
                </label>
                <input
                  type="password"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="w-full for-left text-white p-3 rounded-lg mt-6"
                  disabled={loading}
                >
                  {loading ? "Resetting..." : "Reset Password"}
                </button>
              </form>
            </>
          )}

          {message && <p className="text-green-600 mt-4">{message}</p>}
          {error && <p className="text-red-600 mt-4">{error}</p>}

          <Link to="/login" className="block mt-4 text-center text-gray-700">
            Remember password?{" "}
            <span className="for-text font-semibold hover:underline">
              Login
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
