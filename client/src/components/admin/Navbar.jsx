import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className=" w-full bg-red-500 border-b border-gray-200 ${isSidebarOpen ? 'lg:ml-0' : 'lg:ml-64'}`}">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">

            <Brand 
                url="/admin/dashboard" 
                logo="https://flowbite.com/docs/images/logo.svg" 
                name="ADMIN REKAM" 
            />
            <Profile
                profile="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                name="Admin"
                email="admin@gmail.com"
            />

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

const Brand = (props) => {
    const { url, logo, name } = props;
    return (
        <div className="flex items-center justify-start">
            <a href={url} className="flex ml-2 md:mr-24">
                <img src={logo} className="h-8 mr-3" alt={name} />
                <span className="self-center text-xl font-medium sm:text-2xl whitespace-nowrap"> {name} </span>
            </a>
        </div>
    );
};


const Profile = (props) => {

    const [isProfileOpen, setProfileOpen] = useState(false);
    const toggleProfile = () => setProfileOpen(!isProfileOpen);
    const {profile, name, email} = props;

    return (
        <div className="flex items-center ml-3">
            <div className="relative inline-block text-left">
                <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300" onClick={toggleProfile}>
                    <span className="sr-only">Open user menu</span>
                    <img className="w-8 h-8 rounded-full" src={profile} alt={name} />
                </button>

                {isProfileOpen && (
                    <div className="z-50 absolute right-0 mt-2 text-base list-none bg-white divide-y divide-gray-100 rounded shadow" id="dropdown-2">
                        <div className="px-4 py-3" role="none">
                            <p className="text-sm text-gray-900 dark:text-white" role="none"> {name} </p>
                            <p className="text-sm font-medium text-gray-900 truncate" role="none"> {email} </p>
                        </div>
                        <ul className="py-1" role="none">
                            <li> <Link to="/admin/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 " role="menuitem">Profile</Link></li>
                            <li> <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "role="menuitem"> Sign out</Link></li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};
