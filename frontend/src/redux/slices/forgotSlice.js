import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api/v1";
const API_KEY = "kajal";

// Forgot Password API Call
export const forgotPassword = createAsyncThunk(
  "/login/forgotPassword",
  async (email, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_URL}/login/forgot-password`,
        { email },
        {
          headers: {
            "Content-Type": "application/json",
            "API-KEY": API_KEY,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Error sending OTP."
      );
    }
  }
);

// Verify OTP API Call
export const verifyOtp = createAsyncThunk(
  "/login/verifyOtp",
  async ({ email, otp }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_URL}/login/verify-otp`,
        { email, otp },
        {
          headers: {
            "Content-Type": "application/json",
            "API-KEY": API_KEY,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Invalid OTP.");
    }
  }
);

// Reset Password API Call
export const resetPassword = createAsyncThunk(
  "/login/resetPassword",
  async ({ email, otp, newPassword }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_URL}/login/reset-password`,
        { email, otp, newPassword },
        {
          headers: {
            "Content-Type": "application/json",
            "API-KEY": API_KEY,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Password reset failed."
      );
    }
  }
);

const forgotSlice = createSlice({
  name: "forgot",
  initialState: {
    loading: false,
    message: "",
    error: "",
    otpVerified: false,
  },
  reducers: {
    resetForgotState: (state) => {
      state.loading = false;
      state.message = "";
      state.error = "";
      state.otpVerified = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.message = ""; 
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.loading = false;
        state.message = "OTP sent to your email";
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(verifyOtp.fulfilled, (state) => {
        state.otpVerified = true;
        state.message = "OTP Verified Successfully"; 
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.message = "Password reset successfully"; 
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { resetForgotState } = forgotSlice.actions;
export default forgotSlice.reducer;
