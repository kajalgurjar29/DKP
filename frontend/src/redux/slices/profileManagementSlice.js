import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api/v1";
const API_KEY = "kajal"; // Ensure this is securely stored

// Fetch Profile API Call
export const getProfile = createAsyncThunk(
  "profile/getProfile",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_URL}/profilemanagement/getProfile/${userId}`,
        {
          headers: { "API-KEY": API_KEY },
        }
      );
      return response.data?.data || response.data; // Ensure correct response structure
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch profile."
      );
    }
  }
);

// Update Profile API Call
export const updateProfile = createAsyncThunk(
  "profile/updateProfile",
  async ({ userId, profileData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${API_URL}/profilemanagement/updateProfile/${userId}`,
        profileData,
        {
          headers: { "Content-Type": "application/json", "API-KEY": API_KEY },
        }
      );
      return response.data?.data || response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update profile."
      );
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    user: null,
    loading: false,
    error: "",
    successMessage: "",
  },
  reducers: {
    resetProfileState: (state) => {
      state.loading = false;
      state.error = "";
      state.successMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
        state.error = "";
        state.successMessage = "";
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = "Profile updated successfully!";
        state.user = { ...state.user, ...action.payload };
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetProfileState } = profileSlice.actions;
export default profileSlice.reducer;
