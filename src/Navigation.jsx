import React from "react";
import {Link, useLocation} from "react-router-dom";

function Navigation() {
    const location = useLocation();
    const activeLink = "bg-gray-500 hover:bg-gray-700 text-white font-bold text-xl py-2 px-2 rounded-full justify-center items-center fa-solid fa-wine-glass-empty w-14 h-14";
    const nonActiveLink = "bg-gray-800 hover:bg-gray-700 text-white font-bold text-xl py-2 px-2 rounded-full justify-center items-center fa-solid fa-wine-glass-empty w-14 h-14";

    return (
    <div>
        <nav class="flex gap-3 justify-center items-center my-8">
        <Link to="/Cocktails-App/Category" class="flex flex-col items-center justify-center">
            <button className={location.pathname=="/Cocktails-App/Category" ? activeLink : nonActiveLink} >
            </button>
            <span class="mt-2 text-xs font-medium">CATEGORY</span>
            </Link>

            <Link to="/Cocktails-App/Glasses" class="flex flex-col items-center justify-center">
            <button class="bg-gray-800 hover:bg-gray-700 text-white font-bold text-xl py-2 px-2 rounded-full justify-center items-center fa-solid fa-martini-glass-empty w-14 h-14">
            </button>
            <span class="mt-2 text-xs font-medium">GLASS</span>
            </Link>

            <Link to="/Cocktails-App/Ingredients" class="flex flex-col items-center justify-center">
            <button class="bg-gray-800 hover:bg-gray-700 text-white font-bold text-xl py-2 px-2 rounded-full justify-center items-center fa-regular fa-lemon w-14 h-14">
            </button>
            <span class="mt-2 text-xs font-medium">INGREDIENTS</span>
            </Link>

            <Link to="/Cocktails-App/Alcohol" class="flex flex-col items-center justify-center">
            <button class="bg-gray-800 hover:bg-gray-700 text-white font-bold text-xl py-2 px-2 rounded-full justify-center items-center fa-solid fa-glass-water w-14 h-14">
            </button>
            <span class="mt-2 text-xs font-medium">ALCOHOL</span>
            </Link>
        </nav>
    </div>);
}

export default Navigation;