import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { TiCancel } from "react-icons/ti";
import { GrStatusGood } from "react-icons/gr";

const MyAccount = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    address: "",
    phone: "",
  });

  const [updatedData, setUpdatedData] = useState({ ...userData });

  const [changesUpdated, setChangesUpdated] = useState(null);
  const [error, setError] = useState(null);


  // Toggle between Edit and View mode
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  // Handle input changes in edit mode
  const handleChange = (e) => {
    setUpdatedData({
      ...updatedData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit updated data to Firestore

  return (
    <div className=" p-10 bg-white shadow-md rounded-lg max-w-2xl mx-auto">
        {changesUpdated && (
        <div className="fixed top-12 left-1/2 transform -translate-x-1/2 px-4 py-2 w-fit rounded shadow-lg z-[57] flex justify-center items-center gap-2 border-gray-500 text-white bg-lilac sm:w-full ">
          <GrStatusGood className="text-white" />
          <p>{changesUpdated}</p>
        </div>
      )}
      {error && (
        <div className="fixed top-12 left-1/2 transform -translate-x-1/2 px-4 py-2 w-fit rounded shadow-lg z-[57] flex justify-center items-center gap-2 border-gray-500 text-white bg-red-400 sm:w-full ">
          <TiCancel className="text-white" />
          <p>{error}</p>
        </div>
      )}
      <h2 className="text-2xl font-semibold mb-4">Your Account</h2>

      {isEditing ? (
        <div>
          <div className="mb-4">
            <label className="block text-gray-700">Display Name</label>
            <input
              type="text"
              name="username"
              value={updatedData.username}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={updatedData.email}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={updatedData.address}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              type="number"
              name="phone"
              value={updatedData.phone}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
            />
          </div>
          <div className="flex justify-around">
            <button
              className="text-[0.938rem] font-medium bg-gray-300 w-36 h-10 mt-7 rounded-md transition-colors duration-100 ease-linear delay-75 transform hover:bg-lilac hover:text-white md:text-sm sm:text-sm sm:h-9 "
              onClick={handleSaveChanges}
            >
              Save Changes
            </button>
            <button
              onClick={toggleEditMode}
              className="text-[0.938rem] font-medium bg-red-500 w-28 h-10 mt-7 rounded-md transition-colors duration-100 ease-linear delay-75 transform hover:bg-lilac hover:text-white md:text-sm sm:text-sm sm:h-9"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        // View Mode
        <div>
          <div className="mb-4">
            <label className="block text-gray-700">Display Name:</label>
            <p>{userData.username}</p>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <p>{userData.email}</p>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Address:</label>
            <p>{userData.address}</p>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Phone:</label>
            <p>{userData.phone}</p>
          </div>

          <button
            className="text-[0.938rem] font-medium bg-gray-300 w-full h-10 mt-7 transition-colors duration-100 ease-linear delay-75 rounded-md transform hover:bg-lilac hover:text-white md:text-sm sm:text-sm sm:h-9 "
            onClick={toggleEditMode}
          >
            Edit Information
          </button>
        </div>
      )}
    </div>
  );
};

export default MyAccount;
