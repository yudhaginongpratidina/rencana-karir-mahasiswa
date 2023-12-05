import React, { useState } from "react";
import { Link } from "react-router-dom";
import SidebarAdmin from "./components/SidebarAdmin";
import HeaderAdmin from "./components/HeaderAdmin";

const Profile = () => {
  const [formData, setFormData] = useState({
    fullName: "Neil Sims",
    email: "neil.sims@flowbite.com",
    password: "******",
    avatarUrl: "https://placekitten.com/200/200",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prevData) => ({
          ...prevData,
          avatarUrl: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to update user profile settings (e.g., send to server)
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <HeaderAdmin />
      <div class="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
        <SidebarAdmin />

        <div
          id="main-content"
          class="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900"
        >
          <main>
            <div className="max-w-xl mx-auto mt-10 p-6 bg-white border rounded-lg shadow-md">
              <h1 className="text-2xl font-semibold mb-6">
                User Profile Settings
              </h1>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="avatar"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Avatar
                  </label>
                  <div className="flex items-center mt-1">
                    <img
                      src={formData.avatarUrl}
                      alt="Avatar Preview"
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <input
                      type="file"
                      id="avatar"
                      name="avatar"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="p-2 border rounded-md"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded-md"
                >
                  Save Changes
                </button>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Profile;
