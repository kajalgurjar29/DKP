// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getProfile,
//   updateProfile,
// } from "../../redux/slices/profileManagementSlice";
// import Sidebar from "../Sidebar/Sidebar";
// import Header from "../Header/Header";
// import { CgProfile } from "react-icons/cg";

// function Profile() {
//   const dispatch = useDispatch();
//   const { user, loading, error } = useSelector((state) => state.profile);
//   const [profileData, setProfileData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     role: "",
//   });

//   // Get userId from localStorage
//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user")); // Assuming user data is stored as JSON
//     if (storedUser && storedUser.id) {
//       console.log("Fetching profile for user ID:", storedUser.id);
//       dispatch(getProfile(storedUser.id))
//         .then((response) => console.log("Profile Response:", response))
//         .catch((err) => console.error("Error fetching profile:", err));
//     }
//   }, [dispatch]);

//   // Sync Redux user data with local state
//   useEffect(() => {
//     if (user) {
//       console.log("Redux Profile Data:", user);
//       setProfileData({
//         name: user.name || "",
//         email: user.email || "",
//         phone: user.phone || "",
//         role: user.role || "",
//       });
//     }
//   }, [user]);

//   // Handle input changes
//   const handleChange = (e) => {
//     setProfileData({ ...profileData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     if (storedUser && storedUser.id) {
//       console.log("Updating profile for user ID:", storedUser.id);
//       dispatch(updateProfile({ userId: storedUser.id, profileData }))
//         .then((response) => console.log("Update Response:", response))
//         .catch((err) => console.error("Error updating profile:", err));
//     }
//   };

//   return (
//     <div className="flex w-screen h-screen">
//       <Sidebar />
//       <main className="flex-1 bg-gray-100">
//         <Header title="Profile Management" />

//         <div className="bg-white p-6 shadow-lg rounded-lg m-6">
//           {loading && <p className="text-gray-600">Loading...</p>}
//           {error && <p className="text-red-500">{error}</p>}

//           <div className="flex items-center space-x-4 mb-4">
//             <CgProfile className="size-16 text-gray-600" />
//             <div>
//               <h3 className="text-xl font-semibold">{profileData.name}</h3>
//               <p className="text-gray-500">{profileData.email}</p>
//             </div>
//           </div>

//           <form onSubmit={handleSubmit}>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-gray-700">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={profileData.name}
//                   onChange={handleChange}
//                   className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-gray-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={profileData.email}
//                   onChange={handleChange}
//                   className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-gray-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700">Phone</label>
//                 <input
//                   type="text"
//                   name="phone"
//                   value={profileData.phone}
//                   onChange={handleChange}
//                   className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-gray-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700">Role</label>
//                 <input
//                   type="text"
//                   name="role"
//                   value={profileData.role}
//                   disabled
//                   className="w-full p-2 border rounded-lg bg-gray-200 cursor-not-allowed"
//                 />
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="mt-4 bg-[#2F4F4F] text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
//             >
//               Save Changes
//             </button>
//           </form>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Profile;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfile,
  updateProfile,
} from "../../redux/slices/profileManagementSlice";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { CgProfile } from "react-icons/cg";

function Profile() {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.profile);
  const [profileData, setProfileData] = useState({
    username: "",
    email: "",
    role: "",
  });

  // Get userId from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser?.id) {
      console.log("Fetching profile for user ID:", storedUser.id);
      dispatch(getProfile(storedUser.id))
        .then((response) => console.log("Profile Response:", response))
        .catch((err) => console.error("Error fetching profile:", err));
    } else {
      console.warn("No user ID found in localStorage");
    }
  }, [dispatch]);

  // Sync Redux user data with local state
  useEffect(() => {
    if (user) {
      console.log("Redux Profile Data:", user);
      setProfileData({
        username: user.username || "",
        email: user.email || "",
        role: user.role || "",
      });
    }
  }, [user]);

  // Handle input changes
  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser?.id) {
      console.log("Updating profile for user ID:", storedUser.id);
      try {
        const response = await dispatch(
          updateProfile({ userId: storedUser.id, profileData })
        );
        console.log("Update Response:", response);
      } catch (err) {
        console.error("Error updating profile:", err);
      }
    } else {
      console.warn("No user ID found in localStorage, update aborted");
    }
  };

  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-100">
        <Header title="Profile Management" />

        <div className="bg-white p-6 shadow-lg rounded-lg m-6">
          {loading && <p className="text-gray-600">Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}

          <div className="flex items-center space-x-4 mb-4">
            <CgProfile className="size-16 text-gray-600" />
            <div>
              <h3 className="text-xl font-semibold">{profileData.username}</h3>
              <p className="text-gray-500">{profileData.email}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">Username</label>
                <input
                  type="text"
                  name="username"
                  value={profileData.username}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-gray-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-gray-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">Role</label>
                <input
                  type="text"
                  name="role"
                  value={profileData.role}
                  disabled
                  className="w-full p-2 border rounded-lg bg-gray-200 cursor-not-allowed"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-4 bg-[#2F4F4F] text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              Save Changes
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Profile;
