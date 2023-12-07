import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const AdminNavbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [profile, setProfile] = useState('')
  
    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
  
    useEffect(() => {
        const localStorageKey = 'Credentials'
        const credentials = JSON.parse(localStorage.getItem(localStorageKey))
        const Profile = credentials?.profile
        setProfile(Profile)
    })

    const Menu = [
        {
            name: "Dashboard",
            url: "/admin/dashboard",
        },
        {
            name: "Data",
            url: "/admin/dashboard",
        },
        {
            name: "Message",
            url: "/admin/message",
        },
        {
            name: "Riwayat",
            url: "/admin/dashboard",
        }
    ]

    return (
        <nav className="border-gray-200 bg-red-500">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                <Link to="/admin/dashboard" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-medium text-white whitespace-nowrap">REKAM</span>
                </Link>

                <div className='flex gap-x-2 items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse'>
                    <Link to="/admin/profile" className="inline-flex items-center justify-center p-1 rounded-full cursor-pointer bg-white">
                        <img src={profile} className="h-8" alt="Flowbite Logo" />
                    </Link>
                    <button
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-solid-bg"
                        aria-expanded={isMenuOpen}
                        onClick={toggleMenu}
                        type="button"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/></svg>
                    </button>
                </div>
                <div className={`w-full md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-solid-bg">
                    <ul className="flex flex-col font-medium mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        {Menu.map((item, index) => (
                            <li key={index}>
                                <Link to={item.url} className="block py-2 px-3 md:p-0 text-white">{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default AdminNavbar;
