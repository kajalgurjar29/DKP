import User from "../models/user.model.js"; // Import the User model

/**
 * @param {*} req
 * @return {Promise<object>}
 * @throws {BadRequest}
 */

// Get User Profile by ID
export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password"); // Exclude password field
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch profile", error });
  }
};

/**
 * @param {*} req
 * @return {Promise<object>}
 * @throws {BadRequest}
 */

// Update User Profile
export const updateProfile = async (req, res) => {
  try {
    const { username, email, password, role, phone} = req.body;

    // Find user by ID
    const user = await User.findById(req.params.id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Update fields if provided
    if (username) user.username = username;
    if (email) user.email = email;
    if (role) user.role = role;
    if (phone) user.phone = phone;
    
      if (password) {
        // Hash password if provided
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
      }

    await user.save();

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating profile",
      error: error.message,
    });
  }
};

/**
 * @param {*} req
 * @return {Promise<object>}
 * @throws {BadRequest}
 */

// Delete User Profile (not tested by devloper)
export const deleteProfile = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Profile deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to delete profile", error });
  }
};
